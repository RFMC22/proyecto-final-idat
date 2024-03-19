import React, { Children, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Grid } from 'swiper/modules';
import { SwiperComponent } from '../shared';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import '../../styles/MenuSwiper.css';

const MenuSwiper = ({ slidesArray, display }: any) => {
  const menuOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: { clickable: true },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: true,
    modules: [Grid, Navigation, Pagination, Autoplay],
  };

  return (
    <SwiperComponent options={menuOptions} className={`mySwiper ${display}`}>
      {slidesArray.map((slide: string) => {
        return (
          <SwiperSlide key={slide}>
            <img src={slide} alt="slide1" />
          </SwiperSlide>
        );
      })}
    </SwiperComponent>
  );
};

export default MenuSwiper;
