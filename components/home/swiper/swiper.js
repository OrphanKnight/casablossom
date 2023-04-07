import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/pagination";

import style from "./styles.module.scss";

export default function MainSwiper() {
  const swiperParameters = {
    modules: [A11y, Keyboard, Navigation, Pagination],
    observeParents: true,
    observer: true,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: true },
    keyboard: { enabled: true },
    cssMode: true,
    watchSlidesProgress: true,
    loop: true,
  };
  return (
    <>
      <Swiper {...swiperParameters} className={style.swiper}>
        <SwiperSlide className={style.swiper_slide}>
          <img
            className={style.swiper_slide_image}
            src={`../../../images/swiper/1.jpg`}
          />

          <div className={style.swiper_slide_content}>
            <div className={style.swiper_slide_title}>Fresh Flowers</div>

            <div className={style.swiper_slide_text}>
              CasaBlossom sources and sells fresh flowers for customers to
              purchase either in-store or online. These flowers are carefully
              chosen and arranged to create a stunning display that can brighten
              up any space. They can be purchased as individual stems or in
              bouquets.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className={style.swiper_slide_image}
            src={`../../../images/swiper/2.jpg`}
          />

          <div className={style.swiper_slide_content}>
            <div className={style.swiper_slide_title}>Floral Arrangements</div>

            <div className={style.swiper_slide_text}>
              CasaBlossom creates beautiful and customized floral arrangements
              for a variety of occasions such as weddings, birthdays, funerals,
              and corporate events. These arrangements can be in the form of
              bouquets, centerpieces, wreaths, corsages, boutonnieres, and more.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className={style.swiper_slide_image}
            src={`../../../images/swiper/3.jpg`}
          />

          <div className={style.swiper_slide_content}>
            <div className={style.swiper_slide_title}>
              Gifts and Accessories
            </div>

            <div className={style.swiper_slide_text}>
              CasaBlossom offers a range of gift items and accessories that
              complement their floral arrangements. These items can include
              chocolates, balloons, teddy bears, vases, and greeting cards. The
              shop may also offer gift baskets that combine flowers with other
              gift items.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className={style.swiper_slide_image}
            src={`../../../images/swiper/4.jpg`}
          />

          <div className={style.swiper_slide_content}>
            <div className={style.swiper_slide_title}>Delivery and Set-Up</div>

            <div className={style.swiper_slide_text}>
              CasaBlossom delivers and set-up services for their floral
              arrangements. They can deliver to homes, offices, and event
              venues, and will often set up the arrangements on-site to ensure
              they look their best. This service is particularly useful for busy
              individuals or those who are planning events.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
