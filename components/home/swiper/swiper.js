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
            <div className={style.swiper_slide_title}>Slide 1</div>

            <div className={style.swiper_slide_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nemo saepe vero aliquid assumenda! Ipsa maxime sit reiciendis
              velit odit aliquam,
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className={style.swiper_slide_image}
            src={`../../../images/swiper/2.jpg`}
          />

          <div className={style.swiper_slide_content}>
            <div className={style.swiper_slide_title}>Slide 1</div>

            <div className={style.swiper_slide_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nemo saepe vero aliquid assumenda! Ipsa maxime sit reiciendis
              velit odit aliquam,
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className={style.swiper_slide_image}
            src={`../../../images/swiper/3.jpg`}
          />

          <div className={style.swiper_slide_content}>
            <div className={style.swiper_slide_title}>Slide 1</div>

            <div className={style.swiper_slide_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nemo saepe vero aliquid assumenda! Ipsa maxime sit reiciendis
              velit odit aliquam,
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className={style.swiper_slide_image}
            src={`../../../images/swiper/4.jpg`}
          />

          <div className={style.swiper_slide_content}>
            <div className={style.swiper_slide_title}>Slide 1</div>

            <div className={style.swiper_slide_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nemo saepe vero aliquid assumenda! Ipsa maxime sit reiciendis
              velit odit aliquam,
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
