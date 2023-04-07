import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";
export default function ProductCard({ product }) {
  const [active, setActive] = useState(0);

  const deleteSubProduct = async (productID, subProductId) => {
    try {
      const { data } = await axios.delete("/api/admin/product", {
        data: { productID, subProductId },
      });
      return data;
    } catch (error) {
      return error.response.data.message;
    }
  };

  const deleteThis = async (productID, subProductId) => {
    deleteSubProduct(productID, subProductId);
    setTimeout(function () {
      window.location.reload(true);
    }, 1000);
  };

  return (
    <div className={styles.product}>
      <h1 className={styles.product__name}>{product.name}</h1>
      <h2 className={styles.product__category}>#{product.category?.name}</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="products__swiper"
        style={{ padding: "5px 0 5px 5px" }}
        breakpoints={{
          450: {
            slidesPerView: 2,
          },
          630: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 4,
          },
          1232: {
            slidesPerView: 5,
          },
          1520: {
            slidesPerView: 6,
          },
        }}
      >
        {product.subProducts.map((p, i) => (
          <SwiperSlide key={i}>
            <div className={styles.product__item}>
              <div className={styles.product__item_img}>
                <img src={p.images[0].url} alt="" />
              </div>
              <div className={styles.product__actions}>
                <Link
                  href={`/admin/dashboard/product/${product.slug}?style=${i}`}
                >
                  <TbEdit />
                </Link>
                <Link href={`/product/${product.slug}?style=${i}`}>
                  <AiOutlineEye />
                </Link>
                <Link href="">
                  <RiDeleteBin2Line
                    onClick={() => deleteThis(product._id, p._id)}
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
