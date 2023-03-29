import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "../components/header";
import Footer from "@/components/footer";
import Main from "@/components/home/main";
import MainSwiper from "@/components/home/swiper/swiper";
import axios from "axios";
import db from "@/utils/db";
import { useSession, signIn, signOut } from "next-auth/react";
import Product from "@/models/Product";
import ProductCard from "@/components/productCard";
import Category from "@/components/home/category";
import { flowers, women_accessories, women_shoes } from "@/data/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ country, products }) {
  console.log("product", products);
  const { data: session } = useSession();
  return (
    <>
      <Header />
      <MainSwiper />

      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
        </div>
      </div>
      <Footer />
    </>
  );
}
export async function getServerSideProps() {
  db.connectDb();
  let products = await Product.find().sort({ createdAt: -1 }).lean();
  let data = await axios
    .get("https://api.ipregistry.co/66.165.2.7?key=g0c4a44q7n0m6edu")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      country: data,
    },
  };
}
