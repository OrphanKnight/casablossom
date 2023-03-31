import styles from "../../../../styles/products.module.scss";
import db from "@/utils/db";
import Product from "@/models/Product";
import Header from "@/components/header";
import Category from "@/models/Category";
import SubCategory from "@/models/SubCategory";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import SingularSelect from "../../../../components/selects/SingularSelect";
import MultipleSelect from "../../../../components/selects/MultipleSelect";
import AdminInput from "../../../../components/inputs/adminInput";
import DialogModal from "../../../../components/dialogModal";
import { useDispatch } from "react-redux";
import { showDialog } from "../../../../store/DialogSlice";
import Images from "../../../../components/admin/createProduct/images";
import Colors from "../../../../components/admin/createProduct/colors";
import Style from "../../../../components/admin/createProduct/style";
import Sizes from "../../../../components/admin/createProduct/clickToAdd/Sizes";
import Details from "../../../../components/admin/createProduct/clickToAdd/Details";
import Questions from "../../../../components/admin/createProduct/clickToAdd/Questions";
import { validateCreateProduct } from "../../../../utils/validation";
import dataURItoBlob from "../../../../utils/dataURItoBlob";
import { uploadImages } from "../../../../requests/upload";
import Layout from "../../../../components/admin/layout";

export default function product({ product, parents, categories }) {
  console.log("Colors", product.colors);
  console.log("Sizes", product.sizes);
  console.log("SKU", product.sku);
  console.log("Quantity", product.quantity);
  console.log("Product", product);
  console.log("Colors", product.color);
  console.log("Details", product.details);
  const initialState = {
    name: product.name,
    description: product.description,
    brand: product.brand,
    sku: product.sku,
    discount: product.discount,
    images: product.images,
    description_images: [],
    parent: product._id,
    category: product.category._id,
    subCategories: [],
    color: product.color,
    sizes: product.sizes,
    details: [
      {
        name: "",
        value: "",
      },
    ],
    questions: [
      {
        question: "",
        answer: "",
      },
    ],
    shippingFee: "",
  };
  const [activeImg, setActiveImg] = useState("");
  const [variant, setProuctVariant] = useState(initialState);
  const [subs, setSubs] = useState([]);
  const [colorImage, setColorImage] = useState("");
  const [images, setImages] = useState(
    product.images.map((e) => (typeof e === "string" ? e : e.url))
  );
  const [description_images, setDescription_images] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getParentData = async () => {
      if (variant.parent) {
        const { data } = await axios.get(`/api/product/${variant.parent}`);
        console.log(data);
        if (data) {
          setProuctVariant({
            ...variant,
            name: data.name,
            description: data.description,
            brand: data.brand,
            category: data.category,
            subCategories: data.subCategories,
            questions: [],
            details: [],
          });
        }
      }
    };
    getParentData();
  }, [variant.parent]);
  useEffect(() => {
    async function getSubs() {
      const { data } = await axios.get("/api/admin/subCategory", {
        params: {
          category: variant.category,
        },
      });
      console.log(data);
      setSubs(data);
    }
    getSubs();
  }, [variant.category]);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setProuctVariant({ ...variant, [name]: value });
  };
  const validate = Yup.object({
    name: Yup.string()
      .required("Please add a name")
      .min(5, "Product name must bewteen 5 and 300 characters.")
      .max(300, "Product name must bewteen 5 and 300 characters."),
    brand: Yup.string().required("Please add a brand"),
    category: Yup.string().required("Please select a category."),
    /*
    subCategories: Yup.array().min(
      1,
      "Please select atleast one sub Category."
    ),
   */
    sku: Yup.string().required("Please add a sku/number"),
    color: Yup.string().required("Please add a color"),
    description: Yup.string().required("Please add a description"),
  });
  const createProduct = async () => {
    let test = validateCreateProduct(variant, images);
    console.log(test);
    if (test == "valid") {
      createProductHandler();
    } else {
      dispatch(
        showDialog({
          header: "Please follow our instructions.",
          msgs: test,
        })
      );
    }
  };
  let uploaded_images = [];
  let style_img = "";
  const createProductHandler = async () => {
    setLoading(true);
    //Edit here to scan if input is a string of "data:image/"

    for (let i = 0; i < images.length; i++) {
      if (images[i].startsWith("data:image/")) {
        if (images) {
          let temp = images.map((img) => {
            return dataURItoBlob(img);
          });
          const path = "product images";
          let formData = new FormData();
          formData.append("path", path);
          temp.forEach((image) => {
            formData.append("file", image);
          });
          uploaded_images = await uploadImages(formData);
        }
        if (variant.color.image) {
          let temp = dataURItoBlob(variant.color.image);
          let path = "product style images";
          let formData = new FormData();
          formData.append("path", path);
          formData.append("file", temp);
          let cloudinary_style_img = await uploadImages(formData);
          style_img = cloudinary_style_img[0].url;
        }
        try {
          const { data } = await axios.post("/api/admin/product", {
            ...variant,
            images: uploaded_images,
            color: {
              image: style_img,
              color: variant.color.color,
            },
          });
          setLoading(false);
          toast.success(data.message);
        } catch (error) {
          setLoading(false);
          toast.error(error.response.data.message);
        }
      }
    }
  };
  return (
    <Layout>
      <div className={styles.header}>Create Product</div>

      <Formik
        enableReinitialize
        initialValues={{
          name: variant.name,
          brand: variant.brand,
          description: variant.description,
          category: variant.category,
          subCategories: variant.subCategories,
          parent: variant.parent,
          sku: variant.sku,
          discount: variant.discount,
          color: variant.color.color,
          imageInputFile: "",
          styleInout: "",
        }}
        validationSchema={validate}
        onSubmit={() => {
          createProduct();
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <Images
              name="imageInputFile"
              header="Product Carousel Images"
              text="Add images"
              images={images}
              setImages={setImages}
              setColorImage={setColorImage}
            />
            <div className={styles.flex}>
              {variant.color.image && (
                <img
                  src={variant.color.image}
                  className={styles.image_span}
                  alt=""
                />
              )}
              {variant.color.color && (
                <span
                  className={styles.color_span}
                  style={{ background: `${variant.color.color}` }}
                ></span>
              )}
            </div>
            <Colors
              name="color"
              product={variant}
              setProduct={setProuctVariant}
              colorImage={colorImage}
            />
            <Style
              name="styleInput"
              product={variant}
              setProduct={setProuctVariant}
              colorImage={colorImage}
            />
            <SingularSelect
              name="parent"
              value={variant.parent}
              placeholder="Parent product"
              data={parents}
              header="Add to an existing product"
              handleChange={handleChange}
            />
            <SingularSelect
              name="category"
              value={variant.category}
              placeholder="Category"
              data={categories}
              header="Select a Category"
              handleChange={handleChange}
              disabled={variant.parent}
            />
            {variant.category && (
              <MultipleSelect
                value={variant.subCategories}
                data={subs}
                header="Select SubCategories"
                name="subCategories"
                disabled={variant.parent}
                handleChange={handleChange}
              />
            )}
            <div className={styles.header}>Basic Infos</div>
            <AdminInput
              type="text"
              label="Name"
              name="name"
              placholder="Product name"
              onChange={handleChange}
            />
            <AdminInput
              type="text"
              label="Description"
              name="description"
              placholder="Product description"
              onChange={handleChange}
            />
            <AdminInput
              type="text"
              label="Brand"
              name="brand"
              placholder="Product brand"
              onChange={handleChange}
            />
            <AdminInput
              type="text"
              label="Sku"
              name="sku"
              placholder="Product sku/ number"
              onChange={handleChange}
            />
            <AdminInput
              type="text"
              label="Discount"
              name="discount"
              placholder="Product discount"
              onChange={handleChange}
            />
            <Sizes
              sizes={variant.sizes}
              product={variant}
              setProduct={setProuctVariant}
            />
            <Details
              details={variant.details}
              product={variant}
              setProduct={setProuctVariant}
            />
            <Questions
              questions={variant.questions}
              product={variant}
              setProduct={setProuctVariant}
            />
            {/*
            <Images
              name="imageDescInputFile"
              header="Product Description Images"
              text="Add images"
              images={description_images}
              setImages={setDescriptionImages}
              setColorImage={setColorImage}
            />
           
       
          
            */}
            <button
              className={`${styles.btn} ${styles.btn__primary} ${styles.submit_btn}`}
              type="submit"
            >
              Create Product
            </button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const style = query.style;
  const size = query.size || 0;
  db.connectDb();
  //------------

  const results = await Product.find().select("name subProducts").lean();
  const categories = await Category.find().lean();
  let product = await Product.findOne({ slug })
    .populate({ path: "category", model: Category })
    .populate({ path: "subCategories", model: SubCategory })
    .lean();
  let subProduct = product.subProducts[style];

  let prices = subProduct.sizes
    .map((sizes) => {
      return sizes.price;
    })
    .sort((a, b) => {
      return a - b;
    });
  let newProduct = {
    ...product,
    style,
    images: subProduct.images,
    sizes: subProduct.sizes,
    discount: subProduct.discount,
    sku: subProduct.sku,
    color: subProduct.color,
    details: product.details,
    quantity: subProduct.sizes[size].qty,
  };
  db.disconnectDb();
  return {
    props: {
      product: JSON.parse(JSON.stringify(newProduct)),
      parents: JSON.parse(JSON.stringify(results)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
