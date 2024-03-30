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

import { MenuSwiper, MenuCards } from '../components/';
import { useEffect, useState } from 'react';
import { MenuResponse } from '../interfaces/';
import { getMenuOptions } from '../services/';
import { TabTitle } from '../utils/GeneralFunctions';
import ErrorServer from '../components/shared/ErrorServer';

const Menu = () => {
  TabTitle('¡Descubre todas las delicias que tenemos para ti en nuestro menú!');
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
      try {
        const data = await getMenuOptions();
        return setMenuCardsOptions(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMenuData();
  }, []);

  console.log(menuCardsOptions.data?.length);
  return (
    <section className="Menu container-m sectionContainer">
      <h1 className="menuTitle">ELIGE TU MENÚ DE BEMBOS</h1>

      <div className="container-m ">
        <MenuSwiper slidesArray={slidesArray} display={'none-m'} />
        <MenuSwiper slidesArray={slidesMobileArray} display={'none-d'} />
        {menuCardsOptions.data && menuCardsOptions.data?.length !== 0 ? (
          <MenuCards menuCardOptions={menuCardsOptions.data} />
        ) : (
          <ErrorServer />
        )}
      </div>
    </section>
  );
};

export default Menu;
