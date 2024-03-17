import './../../styles/Menu.css';
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
} from './../../assets/images/';

import MenuSwiper from './MenuSwiper';

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

  return (
    <section className="Menu container-m sectionContainer">
      <h1 className="menuTitle">ELIGE TU MENÚ DE BEMBOS</h1>

      <MenuSwiper slidesArray={slidesArray} display={'none-m'} />
      <MenuSwiper slidesArray={slidesMobileArray} display={'none-d'} />
    </section>
  );
};

export default Menu;
