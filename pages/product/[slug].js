import styles from "../../styles/product.module.scss";
import db from "@/utils/db";
import Product from "@/models/Product";
import Header from "@/components/header";
import Category from "@/models/Category";
import SubCategory from "@/models/SubCategory";
import { useState } from "react";
import ProductCards from "@/components/ProductPage/productCards";
import Infos from "@/components/ProductPage/infos";
import { randomize } from "@/utils/arrays_utils";

export default function ProductPage({ product, products }) {
  const [activeImg, setActiveImg] = useState("");
  return (
    <>
      <Header />
      <div className={styles.product}>
        <div className={styles.product__container}>
          <div className={styles.path}>
            Home / {product.category.name}
            {product.subCategories.map((sub) => (
              <span key={sub}>/{sub.name}</span>
            ))}
          </div>
          <div className={styles.product__main}>
            <ProductCards images={product.images} activeImg={activeImg} />
            <Infos
              product={product}
              setActiveImg={setActiveImg}
              products={products}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const style = query.style;
  const size = query.size || 0;
  db.connectDb();
  //------------
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
    colors: product.subProducts.map((p) => {
      return p.color;
    }),
    priceRange: subProduct.discount
      ? `From $${(prices[0] - prices[0] / subProduct.discount).toFixed(2)}
       to $${(
         prices[prices.length - 1] -
         prices[prices.length - 1] / subProduct.discount
       ).toFixed(2)}`
      : `From $${prices[0]} to $${prices[prices.length - 1]}`,
    price:
      subProduct.discount > 0
        ? (
            subProduct.sizes[size].price -
            subProduct.sizes[size].price / subProduct.discount
          ).toFixed(2)
        : subProduct.sizes[size].price,
    priceBefore: subProduct.sizes[size].price,
    quantity: subProduct.sizes[size].qty,
  };

  const productDB = await Product.find({})
    .populate({ path: "category", model: Category })
    .sort({ updatedAt: -1 })
    .lean();

  const products = randomize(productDB);
  db.disconnectDb();
  return {
    props: {
      product: JSON.parse(JSON.stringify(newProduct)),

      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
