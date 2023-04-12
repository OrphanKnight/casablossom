import Layout from "../../../components/admin/Layout/Layout";
import db from "../../../utils/db";
import Category from "../../../models/Category";
import { useState } from "react";
import Create from "../../../components/admin/Categories/CreateCategory";
import List from "../../../components/admin/Categories/ListCategories";
export default function Categories({ categories }) {
  const [data, setData] = useState(categories);
  console.log(data);
  return (
    <Layout>
      <div>
        <Create setCategories={setData} />
        <List categories={data} setCategories={setData} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  db.connectDb();
  const categories = await Category.find({}).sort({ updatedAt: -1 }).lean();
  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
