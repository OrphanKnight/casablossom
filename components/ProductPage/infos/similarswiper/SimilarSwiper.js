import Link from "next/link";
import { similar_products } from "../../../../data/products";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
export default function SimilarSwiper() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      slidesPerGroup={3}
      navigation={true}
      modules={[Navigation]}
      className="swiper similar_swiper products__swiper"
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 5,
        },
      }}
    >
      {similar_products.map((productImage) => (
        <SwiperSlide>
          <Link href="/">
            <img src={productImage} alt="" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
