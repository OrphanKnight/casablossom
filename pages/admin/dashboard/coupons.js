import Layout from "../../../components/admin/Layout/Layout";
import db from "../../../utils/db";
import Coupon from "../../../models/Coupon";
import { useState } from "react";
import Create from "../../../components/admin/Coupons/CreateCoupons";
import List from "../../../components/admin/Coupons/ListCoupons";
export default function Coupons({ coupons }) {
  const [data, setData] = useState(coupons);
  return (
    <Layout>
      <div>
        <Create setCoupons={setData} />
        <List coupons={data} setCoupons={setData} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  db.connectDb();
  const coupons = await Coupon.find({}).sort({ updatedAt: -1 }).lean();
  return {
    props: {
      coupons: JSON.parse(JSON.stringify(coupons)),
    },
  };
}
