import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "../components/header";
import Footer from "@/components/footer";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ country }) {
  const { data: session } = useSession();
  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}
export async function getServerSideProps() {
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
      country: data,
    },
  };
}
