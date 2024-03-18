import '../styles/pages/Menu.css';
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
import { useEffect, useState } from 'react';
import { MenuResponse } from '../interfaces/MenuProps';
import { getMenuOptions } from '../services/fetchMenuOptions';

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

  const [menuCardsOptions, setMenuCardsOptions] = useState<MenuResponse>({});

  useEffect(() => {
    const getMenuData = async () => {
      const data = await getMenuOptions();
      return setMenuCardsOptions(data);
    };
    getMenuData();
    console.log(menuCardsOptions);
  }, []);
  console.log(menuCardsOptions.data);

  return (
    <section className="Menu container-m sectionContainer">
      <h1 className="menuTitle">ELIGE TU MENÚ DE BEMBOS</h1>

      <div className="container-m ">
        <MenuSwiper slidesArray={slidesArray} display={'none-m'} />
        <MenuSwiper slidesArray={slidesMobileArray} display={'none-d'} />

        {menuCardsOptions.data ? (
          <MenuCards menuCardOptions={menuCardsOptions.data} />
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default Menu;
