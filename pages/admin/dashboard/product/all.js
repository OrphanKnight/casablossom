import Layout from "@/components/admin/Layout/Layout";
import ProductCard from "@/components/admin/products/productCard";
import Category from "@/models/Category";
import Product from "@/models/Product";
import styles from "@/styles/products.module.scss";
import db from "@/utils/db";

export default function All({ products }) {
  console.log(products);
  return (
    <Layout>
      <div className={styles.header}>All Products</div>

      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  db.connectDb();
  const products = await Product.find({})
    .populate({ path: "category", model: Category })
    .sort({ updatedAt: -1 })
    .lean();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
