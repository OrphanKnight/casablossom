import styles from "../styles/browse.module.scss";
import db from "../utils/db";
import Product from "../models/Product";
import Category from "../models/Category";
import Header from "../components/header";
import SubCategory from "../models/SubCategory";
import {
  filterArray,
  randomize,
  removeDuplicates,
} from "../utils/arrays_utils";
import Link from "next/link";
import ProductCard from "@/components/productCard";
import CategoryFilter from "../components/browse/CategoryFilter/CategoryFilter";
import SizesFilter from "../components/browse/sizesFilter";
import ColorsFilter from "../components/browse/colorsFilter/ColorsFilter";
import HeadingFilters from "../components/browse/headingFilters/HeadingFilters";
import { useRouter } from "next/router";
import { Pagination } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function Browse({
  categories,
  subCategories,
  products,
  sizes,
  colors,
  paginationCount,
}) {
  const router = useRouter();

  // Function to update URL with filter parameters and apply them
  const filter = ({
    search,
    category,
    brand,
    style,
    size,
    color,
    pattern,
    material,
    gender,
    price,
    shipping,
    rating,
    sort,
    page,
  }) => {
    // Update URL query parameters
    const path = router.pathname;
    const { query } = router;
    if (search) query.search = search;
    if (category) query.category = category;
    if (brand) query.brand = brand;
    if (style) query.style = style;
    if (size) query.size = size;
    if (color) query.color = color;
    if (pattern) query.pattern = pattern;
    if (material) query.material = material;
    if (gender) query.gender = gender;
    if (price) query.price = price;
    if (shipping) query.shipping = shipping;
    if (rating) query.rating = rating;
    if (sort) query.sort = sort;
    if (page) query.page = page;
    router.push({
      pathname: path,
      query: query,
    });
  };

  // searchHandler: updates the search query parameter in the URL based on the search input value.
  const searchHandler = (search) => {
    if (search == "") {
      filter({ search: {} });
    } else {
      filter({ search });
    }
  };

  // categoryHandler: updates the category query parameter in the URL based on the selected category.
  const categoryHandler = (category) => {
    filter({ category });
  };

  // sizeHandler: updates the size query parameter in the URL based on the selected size.
  const sizeHandler = (size) => {
    filter({ size });
  };

  // colorHandler: updates the color query parameter in the URL based on the selected color.
  const colorHandler = (color) => {
    filter({ color });
  };

  // priceHandler: updates the price query parameter in the URL based on the selected minimum or maximum price.
  const priceHandler = (price, type) => {
    let priceQuery = router.query.price?.split("_") || "";
    let min = priceQuery[0] || "";
    let max = priceQuery[1] || "";
    let newPrice = "";
    if (type == "min") {
      newPrice = `${price}_${max}`;
    } else {
      newPrice = `${min}_${price}`;
    }
    filter({ price: newPrice });
  };

  // multiPriceHandler: updates the price query parameter in the URL based on the selected minimum and maximum price range.
  const multiPriceHandler = (min, max) => {
    filter({ price: `${min}_${max}` });
  };

  // shippingHandler: updates the shipping query parameter in the URL based on the selected shipping option.
  const shippingHandler = (shipping) => {
    filter({ shipping });
  };

  // sortHandler: updates the sort query parameter in the URL based on the selected sorting method.
  const sortHandler = (sort) => {
    if (sort == "") {
      filter({ sort: {} });
    } else {
      filter({ sort });
    }
  };
  // pageHandler: updates the page query parameter in the URL based on the selected pagination page number.
  const pageHandler = (e, page) => {
    filter({ page });
  };
  //----------
  // Utility functions for managing the query parameters
  function checkChecked(queryName, value) {
    if (router.query[queryName]?.search(value) !== -1) {
      return true;
    }
    return false;
  }
  // Replace or add the value of the query parameter
  function replaceQuery(queryName, value) {
    const existedQuery = router.query[queryName];
    const valueCheck = existedQuery?.search(value);
    const _check = existedQuery?.search(`_${value}`);
    let result = "";
    if (existedQuery) {
      if (existedQuery == value) {
        result = {};
      } else {
        if (valueCheck !== -1) {
          if (_check !== -1) {
            result = existedQuery?.replace(`_${value}`, "");
          } else if (valueCheck == 0) {
            result = existedQuery?.replace(`${value}_`, "");
          } else {
            result = existedQuery?.replace(value, "");
          }
        } else {
          result = `${existedQuery}_${value}`;
        }
      }
    } else {
      result = value;
    }
    return {
      result,
      active: existedQuery && valueCheck !== -1 ? true : false,
    };
  }
  //---------------------------------
  // useState hooks for managing the scrollY and height
  const [scrollY, setScrollY] = useState(0);
  const [height, setHeight] = useState(0);

  // useRef hooks for referencing DOM elements
  const headerRef = useRef(null);
  const el = useRef(null);

  // useEffect hook to handle scroll event and update the scrollY and height state

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    setHeight(headerRef.current?.offsetHeight + el.current?.offsetHeight);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollY, height);
  //---------------------------------
  return (
    <>
      <div className={styles.header_container}>
        <Header searchHandler={searchHandler} />
      </div>
      <div className={styles.browse}>
        <div ref={headerRef}></div>
        <div className={styles.browse__container}>
          <div ref={el}>
            <div className={styles.browse__path}>Home / Browse</div>
            <div className={styles.browse__tags}>
              {categories.map((c) => (
                <Link href="" key={c._id} legacyBehavior>
                  <a>{c.name}</a>
                </Link>
              ))}
            </div>
          </div>
          <div
            className={`${styles.browse__store} ${scrollY >= height ? "" : ""}`}
          >
            <div
              className={`${styles.browse__store_filters} ${styles.scrollbar}`}
            >
              <button
                className={styles.browse__clearBtn}
                onClick={() => router.push("/browse")}
              >
                Clear All ({Object.keys(router.query).length})
              </button>
              <CategoryFilter
                categories={categories}
                subCategories={subCategories}
                categoryHandler={categoryHandler}
                replaceQuery={replaceQuery}
              />
              <SizesFilter sizes={sizes} sizeHandler={sizeHandler} />
              <ColorsFilter
                colors={colors}
                colorHandler={colorHandler}
                replaceQuery={replaceQuery}
              />
            </div>
            <div className={styles.browse__store_products_wrap}>
              <HeadingFilters
                priceHandler={priceHandler}
                multiPriceHandler={multiPriceHandler}
                shippingHandler={shippingHandler}
                replaceQuery={replaceQuery}
                sortHandler={sortHandler}
              />
              <div className={styles.browse__store_products}>
                {products.map((product) => (
                  <ProductCard product={product} key={product._id} />
                ))}
              </div>
              <div className={styles.pagination}>
                <Pagination
                  count={paginationCount}
                  defaultPage={Number(router.query.page) || 1}
                  onChange={pageHandler}
                  variant="outlined"
                  color="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  //-------------------------------------------------->
  const searchQuery = query.search || "";
  const categoryQuery = query.category || "";
  const genderQuery = query.gender || "";
  const priceQuery = query.price?.split("_") || "";
  const shippingQuery = query.shipping || 0;
  const ratingQuery = query.rating || "";
  const sortQuery = query.sort || "";
  const pageSize = 12;
  const page = query.page || 1;

  //-----------
  // Create search regex for various filters
  const brandQuery = query.brand?.split("_") || "";
  const brandRegex = `^${brandQuery[0]}`;
  const brandSearchRegex = createRegex(brandQuery, brandRegex);
  //-----------
  //-----------
  const styleQuery = query.style?.split("_") || "";
  const styleRegex = `^${styleQuery[0]}`;
  const styleSearchRegex = createRegex(styleQuery, styleRegex);
  //-----------
  //-----------
  const patternQuery = query.pattern?.split("_") || "";
  const patternRegex = `^${patternQuery[0]}`;
  const patternSearchRegex = createRegex(patternQuery, patternRegex);
  //-----------
  //-----------
  const materialQuery = query.material?.split("_") || "";
  const materialRegex = `^${materialQuery[0]}`;
  const materialSearchRegex = createRegex(materialQuery, materialRegex);
  //-----------
  const sizeQuery = query.size?.split("_") || "";
  const sizeRegex = `^${sizeQuery[0]}`;
  const sizeSearchRegex = createRegex(sizeQuery, sizeRegex);
  //-----------
  const colorQuery = query.color?.split("_") || "";
  const colorRegex = `^${colorQuery[0]}`;
  const colorSearchRegex = createRegex(colorQuery, colorRegex);
  //-------------------------------------------------->

  // Create query objects for filters
  const search =
    searchQuery && searchQuery !== ""
      ? {
          name: {
            $regex: searchQuery,
            $options: "i",
          },
        }
      : {};
  const category =
    categoryQuery && categoryQuery !== "" ? { category: categoryQuery } : {};

  const style =
    styleQuery && styleQuery !== ""
      ? {
          "details.value": {
            $regex: styleSearchRegex,
            $options: "i",
          },
        }
      : {};
  const size =
    sizeQuery && sizeQuery !== ""
      ? {
          "subProducts.sizes.size": {
            $regex: sizeSearchRegex,
            $options: "i",
          },
        }
      : {};
  const color =
    colorQuery && colorQuery !== ""
      ? {
          "subProducts.color.color": {
            $regex: colorSearchRegex,
            $options: "i",
          },
        }
      : {};
  const brand =
    brandQuery && brandQuery !== ""
      ? {
          brand: {
            $regex: brandSearchRegex,
            $options: "i",
          },
        }
      : {};
  const pattern =
    patternQuery && patternQuery !== ""
      ? {
          "details.value": {
            $regex: patternSearchRegex,
            $options: "i",
          },
        }
      : {};
  const material =
    materialQuery && materialQuery !== ""
      ? {
          "details.value": {
            $regex: materialSearchRegex,
            $options: "i",
          },
        }
      : {};
  const gender =
    genderQuery && genderQuery !== ""
      ? {
          "details.value": {
            $regex: genderQuery,
            $options: "i",
          },
        }
      : {};
  const price =
    priceQuery && priceQuery !== ""
      ? {
          "subProducts.sizes.price": {
            $gte: Number(priceQuery[0]) || 0,
            $lte: Number(priceQuery[1]) || Infinity,
          },
        }
      : {};

  const shipping =
    shippingQuery && shippingQuery == "0"
      ? {
          shipping: 0,
        }
      : {};

  const rating =
    ratingQuery && ratingQuery !== ""
      ? {
          rating: {
            $gte: Number(ratingQuery),
          },
        }
      : {};

  const sort =
    sortQuery == ""
      ? {}
      : sortQuery == "popular"
      ? { rating: -1, "subProducts.sold": -1 }
      : sortQuery == "newest"
      ? { createdAt: -1 }
      : sortQuery == "topSelling"
      ? { "subProducts.sold": -1 }
      : sortQuery == "topReviewed"
      ? { rating: -1 }
      : sortQuery == "priceHighToLow"
      ? { "subProducts.sizes.price": -1 }
      : sortQuery == "priceLowToHigh"
      ? { "subProducts.sizes.price": 1 }
      : {};
  //-------------------------------------------------->
  //-------------------------------------------------->
  // Create a function to generate a regex string for queries
  function createRegex(data, styleRegex) {
    if (data.length > 1) {
      for (var i = 1; i < data.length; i++) {
        styleRegex += `|^${data[i]}`;
      }
    }
    return styleRegex;
  }
  //-------------------------------------------------->
  // Connect to the database and retrieve product data
  db.connectDb();
  let productsDb = await Product.find({
    ...search,
    ...category,
    ...brand,
    ...style,
    ...size,
    ...color,
    ...pattern,
    ...material,
    ...gender,
    ...price,
    ...shipping,
    ...rating,
  })
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .sort(sort)
    .lean();
  let products =
    sortQuery && sortQuery !== "" ? productsDb : randomize(productsDb);

  // Retrieve additional data such as categories, subcategories, and other filter options
  let categories = await Category.find().lean();
  let subCategories = await SubCategory.find()
    .populate({
      path: "parent",
      model: Category,
    })
    .lean();
  let colors = await Product.find({ ...category }).distinct(
    "subProducts.color.color"
  );
  let brandsDb = await Product.find({ ...category }).distinct("brand");
  let sizes = await Product.find({ ...category }).distinct(
    "subProducts.sizes.size"
  );
  let details = await Product.find({ ...category }).distinct("details");
  let stylesDb = filterArray(details, "Style");
  let patternsDb = filterArray(details, "Pattern Type");
  let materialsDb = filterArray(details, "Material");
  let styles = removeDuplicates(stylesDb);

  // Calculate the total number of products that match the filters
  let totalProducts = await Product.countDocuments({
    ...search,
    ...category,
    ...brand,
    ...style,
    ...size,
    ...color,
    ...pattern,
    ...material,
    ...gender,
    ...price,
    ...shipping,
    ...rating,
  });
  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
      subCategories: JSON.parse(JSON.stringify(subCategories)),
      products: JSON.parse(JSON.stringify(products)),
      sizes,
      colors,
      stylesData: styles,
      paginationCount: Math.ceil(totalProducts / pageSize),
    },
  };
}
