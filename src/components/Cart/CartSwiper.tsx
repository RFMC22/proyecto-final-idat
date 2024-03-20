import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Grid } from 'swiper/modules';
import { SwiperComponent } from '../shared';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './../../styles/Cart.css';

const CartSwiper = ({ complementos }: any) => {
  const CartOptions = {
    slidesPerView: 2,
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
    <SwiperComponent options={CartOptions} className={'myCartSwiper'}>
      {complementos.map((complemento: any) => {
        return (
          <SwiperSlide key={complemento.id}>
            <div className="card">
              <div className="img-container">
                <img src={complemento.img} alt={complemento.nombre} />
              </div>
              <div className="complemento-text">
                <p className="product-name">{complemento.nombre}</p>
                <p className="product-price">{`S/. ${complemento.precio}`}</p>
              </div>
              <div className="complemento-btn">
                <button className="btn-blue"> AGREGAR </button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </SwiperComponent>
  );
};

export default CartSwiper;
