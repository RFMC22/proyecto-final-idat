import { TabTitle } from "../utils/GeneralFunctions"
import '../styles/pages/Home.css'

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
  salonDesk,
  salonMobile,
  linkFb,
  linkTw
} from '../assets/images';
import { SwiperComponent } from "../components/shared";
import { SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { MenuResponse } from "../interfaces";
import { getMenuOptions } from "../services";
import { Card } from "../components";
import { Link } from "react-router-dom";
import { PathConstants } from "../utils";

const Home = () => {
  TabTitle('Hamburguesas Delivery | Bembos Perú | !Pide Online¡');

  const [menus, setMenus] = useState<MenuResponse>({})

  const homeOptions = {
    spaceBetween: 30,
    effect: "fade",
    navigation: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    modules: [Navigation, Pagination, EffectFade]
  }
  const menusOptions = {
    slidesPerView:4,
    spaceBetween:40,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    pagination: {
      clickable: true
    },
    modules: [Navigation],
    breakpoints:{
      768: {
        slidesPerView: 4
      },
      500: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 2,
      },
  }
  }

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

  useEffect(()=>{
    const getMenuData = async () => {
      const menuData = await getMenuOptions();
      setMenus(menuData);
    }
    getMenuData();
  },[])
  return (
    <section>
      <SwiperComponent options={homeOptions} className="none-m home">
        {slidesArray.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide} alt={`slide ${index+1}`} className="slider"/>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </SwiperComponent>
      <SwiperComponent options={homeOptions} className="none-d home">
        {slidesMobileArray.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide} alt={`slide ${index+1}`} className="slider"/>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </SwiperComponent>
      <div className="container container-menu-home">
        <div className="top-content">
          <h2>MENU DE HAMBURGUESAS ONLINE</h2> 
          <div className="btn-content"><button className="btn-prev none-l-m"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492 492" width="20" height="30" xml:space="preserve"><g><g><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"></path></g></g></svg></button> <button className="btn-next none-l-m"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 451.846 451.847" width="20" height="30" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></g></svg></button></div></div>
        <SwiperComponent options={menusOptions}>
          {menus.data?.map(menu => (
            <SwiperSlide key={menu.id}>
              <Card 
                nombre={menu.nombre}
                img={menu.img}
                link={menu.link}
                id={menu.id}
              />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
      <div className="banner container">
        <Link to={`${PathConstants.PROMOCIONES}/tiendas-callcenter-auto`}>
          <picture>
            <source srcSet={salonMobile} media="(max-width:800px)" />
            <img src={salonDesk} className="img" alt="salonDesk" />
          </picture>
        </Link>
      </div>
      <div className="social-box container">
        <div className="social-box-content">
          <div className="content-left">
            <div className="content-title"> 
              SOCIAL <br/> BEMBOS
            </div> 
            <p>Compartir en:</p> 
            <a href="https://twitter.com/BembosOficial" target="_blank" rel="noopener">
              <img src={linkFb} width="145" height="32" alt="TwitterBembos" loading="lazy"/>
            </a> 
            <a href="https://www.facebook.com/bembos/" target="_blank" rel="noopener">
              <img src={linkTw} width="145" height="32" alt="FacebookBembos" loading="lazy"/>
            </a>
          </div> 
          <div className="content-right">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAA2CAMAAAC1MuSAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURf///6St0ImVwR83jbS72CxCkz9SnP///////+fp8vn5/ExeohIrh15urERXn9/i7ltrqlRlpzZKmOvt9L/F3tPY6Sg+kf39/ml5se/w9snO43WCt/X2+pagyYGNvQMcf52nzAokg7ZUQREAAAAIdFJOU+j///////8XKy4ArAAAAu1JREFUWMPtl+mSojAUhTuEpEnYQzayNbz/S05AsWVRC51/M0cLKxC/wpzcw/XrK3tTtL+qc8up7693aV3Ciqv8xzRSFrjUUbYZP6eFwhJVC2O4/5zmWlg7jRljSH5O63NE0oLFHxqSRPwNGoCJisoy9Zdom7P/af84rdZNeVUjYVtBXN7Gmp+kKT/CmySKb/k7HrU6R6sx4/UDGYbEKRpNxng7DyThGOgZWm/b5pk0OUNTTvy6sFMTiDrp6S279xqbky7ETQYFORYY7endWxb1gyu+SE7TbJE+8NtKcJrmd7W0PCYqbE7TUqQf0GBOTtMEq9Sx28Vk6UlaX0l3fNPQvpFILRQPFtS/QbPy2FSL0jdogzw2tWLiDRqXh6b2DLs1zZHnmqfXKD8yVaB2neSifJhdlwDT04ZSDJMjS6Vd0UiOQfpMnunp7lpmjiyVfkULjLzauWiY5s31uJWG/I7GrZTtK83FMxxWamzmbjRnEcYVxrG3w5Oux/vB9MFg/K2mODCVVIguNDUgMA/qJAiV0dQOXRz4ecAt6ON0H4yiAHlFYLuvLcNatdAIvixhl7MqrjGQObKUtqzCIu6vHAbqSlTJuPoDrimr9oEJpL3RBIwTjXcAGoJC1jbUo84gTuKyl7kLqKsh6Ic4SUChSsZ3tAQO2ZoGG5z31CINQbSvqbBTGmmUZJy1Oa7ndtTEmg/LN+8tLfiNRvKEZiotbSw1krSDyxQvdRzUofFuuqLN9fFckQyMYRfjzfK4mDxNYai7jpCuW463wf25OoExKMy4M7XLUf9LU56x6rUY82pOWbd7zLb9fcclhuS1wBw6BFfbqjHQ0lX/loLXGuZA7LXcxm86ArWiBXnd84/FLkFJk2Jb98MPX/eWAiWOPpUL7GIc+AFq0zsVYtOpWsafh2W6ZLhAbOD3CkXTbWikkfkzVVJffYvlOv7ca8Rm10U78zQsU0N/k259hZODnlxNr+Ww+szUizbx4/8Lx/r+A74UnECfXiZ4AAAAAElFTkSuQmCC" alt="Bembos" loading="lazy"/> 
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbembos%2F&amp;tabs&amp;width=500&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=true&amp;appId" width="500" height="130" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" style={{border: 'none', overflow: 'hidden'}}></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home