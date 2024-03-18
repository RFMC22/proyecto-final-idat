import { TabTitle } from "../utils/GeneralFunctions"
import '../styles/pages/Promociones.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrUserManager } from "react-icons/gr";
import { getPromosPersonales } from "../services/fetchPromociones";
import { PromocionPersonalResponse } from "../interfaces";
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import { SwiperComponent } from "../components/shared";

const Promociones = () => {
  TabTitle('Promociones de Hamburguesas Bembos | Delivery Perú');

  const [activeTab, setActiveTab] = useState('item__personales');
  const [promosPersonales, setPromosPersonales] = useState<PromocionPersonalResponse>({});

  const handleTabClick = (id:string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop,
      });
    }
  };

  useEffect(()=>{
    const getDataPersonal = async () => {
      const data = await getPromosPersonales();
      return setPromosPersonales(data);
    }
    getDataPersonal();
  },[]);

  const promocionesPersonalesOptions = {
    slidesPerView:1,
    grid:{
      rows: 2
    },
    spaceBetween:30,
    navigation:true, 
    modules:[Grid, Navigation, Pagination],
    pagination:{
      clickable: true,
    },
    breakpoints:{
        768: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
    }
  }
  
  return (
    <section>
      <div className="ppromos-tabs-main showDesktop ppromos-tabs-list">
        <Link to="#" onClick={() => handleTabClick('item__personales')} className={activeTab === 'item__personales' ? 'active' : ''}>Promociones Personales</Link>
        <Link to="#" onClick={() => handleTabClick('item__combo-para-2')} className={activeTab === 'item__combo-para-2' ? 'active' : ''}>Promociones para 2</Link>
        <Link to="#" onClick={() => handleTabClick('item__para-compartir')} className={activeTab === 'item__para-compartir' ? 'active' : ''}>Promociones para compartir</Link>
        <Link to="#" onClick={() => handleTabClick('item__cupones')} className={activeTab === 'item__cupones' ? 'active' : ''}>Cupones</Link>
      </div>
      <div className="container">
        <div className="container-main">
          <div className="ppromos-address-bar">
            <div className="ppromos-address-col1 address">
              <div className="ppromos-mark-yellow"></div> 
              <div className="ppromos-address-col1-text">
                <span>Av. Benavides N° 1821</span> <b>Aurora</b>
              </div>
            </div> 
            <div className="promos-hasta-label-w">
              <div id="promos-hasta-label" style={{height: ''}} className="">
                <p>Promo online con hasta 50% de descuento</p>
              </div>
            </div> 
            <div className="ppromos-buscar-col">
              <input type="text" placeholder="Buscar producto"/>
              <i className="ppromos-lupa"></i>
              {/* <i className="ppromos-close-buscar"></i> */}
            </div>
          </div>
          <div className="ppromos-tabs-main-w showMobile">
            <div className="ppromos-tabs-main showMobile ppromos-tabs-list" style={{top: '0px'}}>
              <Link to="#" onClick={() => handleTabClick('item__personales')} className={activeTab === 'item__personales' ? 'active' : ''}>Promociones Personales</Link>
              <Link to="#" onClick={() => handleTabClick('item__combo-para-2')} className={activeTab === 'item__combo-para-2' ? 'active' : ''}>Promociones para 2</Link>
              <Link to="#" onClick={() => handleTabClick('item__para-compartir')} className={activeTab === 'item__para-compartir' ? 'active' : ''}>Promociones para compartir</Link>
              <Link to="#" onClick={() => handleTabClick('item__cupones')} className={activeTab === 'item__cupones' ? 'active' : ''}>Cupones</Link>
            </div>
          </div>
          <div className="page-body">
            <h1>Promociones de Hamburguesas para ti con delivery</h1>
            <div className="detail-info">
              <h2 className="subcatTitle">
                <span data-categoryid="0" id="subcatTitle-97" className="subcatTitle">
                  <GrUserManager size={'32px'} />
                  Promociones Personales
                </span>
              </h2>
            </div>
            <div className="promociones-familiares">
              <div id="item__personales" className="ppromos-listaProductos">
                <div className="list-promociones list-promo-horizontal">
                  <SwiperComponent options={promocionesPersonalesOptions} className="swiper-promo-personal">
                    {promosPersonales.data?.map(promoPersonal => (
                      <SwiperSlide key={promoPersonal.id} className="list-subsub-block">
                        <div className="content">
                          <div className="content-promotion-card">
                            <div className="promotion-card">
                              <span className="favorite bb"></span>
                              <div className="promotion-img">
                                <span className="discount"> -{promoPersonal.descuento} </span>
                                  <picture className="promotion-img-img">
                                      <img src={promoPersonal.img}/>
                                  </picture> 
                                  <div className="terms">
                                    <a className="link">Términos y Condiciones</a>
                                  </div>
                                </div>
                                <div className="promotion-content">
                                  <a href="/promociones/delivery-hamburguesas/promo-combo-hawaiana"><h4>{promoPersonal.nombre}</h4></a> 
                                  <div className="promotion-content-desc">{promoPersonal.descripcion}</div>  
                                  <div className="inferior-info-card">
                                    <div className="content-price">
                                      <p className="price">S/. {promoPersonal.precio_actual}</p> 
                                      <p className="real-price">S/. {promoPersonal.precio_antiguo}</p></div> 
                                      <button>Ver más</button> 
                                    </div> 
                                  </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </SwiperComponent>
                </div>
                <h3 className="complementos-label">Complementos: </h3>
                <div className="carousel-complementos hasNavigation">
                  b
                </div>
              </div>
              <div id="item__combo-para-2">
              </div>
              <div id="item__para-compartir">
              </div>
              <div id="item__cupones">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-ver-car">
        <div className="btn-ver-car" style={{backgroundColor: 'rgb(23, 48, 131)'}}> 
          <span className="btn-ver-car-label">ver carrito</span> 
        </div>
      </div>
    </section>
  )
}

export default Promociones