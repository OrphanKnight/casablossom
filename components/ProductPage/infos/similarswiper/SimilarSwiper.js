import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// import required modules
export default function SimilarSwiper({ products }) {
  let randomProperty = [];
  for (let i = 0; i < 12; i++) {
    randomProperty.push(products[Math.floor(Math.random() * products.length)]);
  }

  console.log("Pro", randomProperty);
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
      {randomProperty.map((product, i) => (
        <SwiperSlide key={i}>
          <Link href={`/product/${product.slug}?style=0`}>
            <img src={product.subProducts[0].images[0].url} alt="" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
