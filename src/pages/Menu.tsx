import './../styles/Menu.css';
import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slideMob1,
  slideMob2,
  slideMob3,
  slideMob4,
  slideMob5,
  slideMob6,
  slideMob7,
  slideMob8,
  slideMob9,
} from '../assets/images';

import MenuSwiper from '../components/Menu/MenuSwiper';
import MenuCards from '../components/Menu/MenuCards';
import { PathConstants } from '../utils/PathConstants';

const Menu = () => {
  const slidesArray: Array<string> = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
  ];

  const slidesMobileArray: Array<string> = [
    slideMob1,
    slideMob2,
    slideMob3,
    slideMob4,
    slideMob5,
    slideMob6,
    slideMob7,
    slideMob8,
    slideMob9,
  ];

  const menuCardOptions = [
    {
      img: 'https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-duo-qt-categoria-nuevo-mayo.webp',
      text: 'PROMOCIONES EXCLUSIVAS WEB',
      link: PathConstants.PROMOCIONES,
    },
    {
      img: 'https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/combo-churrita-509x360.webp',
      text: 'COMBOS',
      link: PathConstants.INDEX,
    },
    {
      img: 'https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-hamburguesas.webp',
      text: 'HAMBURGUESAS',
      link: PathConstants.INDEX,
    },
    {
      img: 'https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-pollo.webp',
      text: 'POLLO',
      link: PathConstants.INDEX,
    },
    {
      img: 'https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/loncherita-509x360.webp',
      text: 'LONCHERITAS',
      link: PathConstants.INDEX,
    },
    {
      img: 'https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/complementos_desktop_1.webp',
      text: 'COMPLEMENTOS',
      link: PathConstants.INDEX,
    },
    {
      img: 'https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-gaseosa.webp',
      text: 'BEBIDAS',
      link: PathConstants.INDEX,
    },
    {
      img: 'https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-categoria-bembos.webp',
      text: 'HELADOS',
      link: PathConstants.INDEX,
    },
    {
      img: 'https://www.bembos.com.pe/_ipx/q_75,s_540x382/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/509x360-inka-chips-nuevo.webp',
      text: 'INKACHIPS',
      link: PathConstants.INDEX,
    },
  ];

  return (
    <section className="Menu container-m sectionContainer">
      <h1 className="menuTitle">ELIGE TU MENÚ DE BEMBOS</h1>

      <div className="container-m ">
        <MenuSwiper slidesArray={slidesArray} display={'none-m'} />
        <MenuSwiper slidesArray={slidesMobileArray} display={'none-d'} />

        <MenuCards menuCardOptions={menuCardOptions} />
      </div>
    </section>
  );
};

export default Menu;
