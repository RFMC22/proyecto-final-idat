import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/MenuSwiper.css';

const MenuSwiper = ({ slidesArray, display }: any) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={`mySwiper ${display}`}
    >
      {slidesArray.map((slide: string) => {
        return (
          <SwiperSlide key={slide}>
            <img src={slide} alt="slide1" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MenuSwiper;
