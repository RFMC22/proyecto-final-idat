import { TabTitle } from '../utils/GeneralFunctions';
import '../styles/pages/Promociones.css';
import { useEffect } from 'react';
import { GrUserManager } from 'react-icons/gr';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import { SwiperComponent } from "../components/shared";
import { Card, Tabs } from "../components";
import useShopping from "../hooks/useShopping";
import { PathConstants } from "../utils";
import { Link } from "react-router-dom";

const Promociones = () => {
  const {
    getDataPromociones,
    promosPersonales,
    promosDos,
    promosCompartir,
    complementos,
    cupones,
    setCartState,
    selectLocal,
  } = useShopping();
  TabTitle('Promociones de Hamburguesas Bembos | Delivery Perú');
  const { distrito, sede } = selectLocal;

  useEffect(() => {
    getDataPromociones();
  }, []);

  const promocionesPersonalesOptions = {
    slidesPerView: 1,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    navigation: {
      nextEl: '.btn-next-2',
      prevEl: '.btn-prev-2',
    },
    pagination: {
      clickable: true,
    },
    modules: [Grid, Navigation, Pagination],
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };
  const complementosOptions = {
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    pagination: {
      clickable: true,
    },
    modules: [Pagination, Navigation],
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  const handleVerCarrito = () => {
    setCartState(true);
  };

  return (
    <section>
      <Tabs
        elementoIncial={1}
        show={'desktop'}
        elementos={[
          { id: 1, nombre: 'Promociones Personales' },
          { id: 2, nombre: 'Promociones para 2' },
          { id: 3, nombre: 'Promociones para compartir' },
          { id: 4, nombre: 'Cupones' },
        ]}
      />
      <div className="container">
        <div className="container-main">
          <div className="ppromos-address-bar">
            <div className="ppromos-address-col1 address">
              <div className="ppromos-mark-yellow"></div>
              <div className="ppromos-address-col1-text">
                <Link to={`${PathConstants.RECOJO}/recojo`}>
                  <span> {sede} </span> <b> {distrito} </b>
                </Link>
              </div>
            </div>
            <div className="promos-hasta-label-w">
              <div id="promos-hasta-label" style={{ height: '' }} className="">
                <p>Promo online con hasta 50% de descuento</p>
              </div>
            </div>
            <div className="ppromos-buscar-col">
              <input type="text" placeholder="Buscar producto" />
              <i className="ppromos-lupa"></i>
              {/* <i className="ppromos-close-buscar"></i> */}
            </div>
          </div>
          <div className="ppromos-tabs-main-w showMobile">
            <Tabs
              elementoIncial={1}
              show={'mobile'}
              elementos={[
                { id: 1, nombre: 'Promociones Personales' },
                { id: 2, nombre: 'Promociones para 2' },
                { id: 3, nombre: 'Promociones para compartir' },
                { id: 4, nombre: 'Cupones' },
              ]}
            />
          </div>
          <div className="page-body">
            <h1>Promociones de Hamburguesas para ti con delivery</h1>
            <div className="detail-info">
              <h2 className="subcatTitle">
                <span
                  data-categoryid="0"
                  id="subcatTitle-97"
                  className="subcatTitle"
                >
                  <GrUserManager size={'32px'} />
                  Promociones Personales
                </span>
              </h2>
            </div>
            <div className="promociones-familiares">
              <div id="1" className="ppromos-listaProductos">
                <div className="list-promociones list-promo-horizontal">
                  <SwiperComponent
                    options={promocionesPersonalesOptions}
                    className="swiper-promo-personal"
                  >
                    <div className="btn-next-2"></div>
                    <div className="btn-prev-2"></div>
                    {promosPersonales.data?.map((promoPersonal) => (
                      <SwiperSlide
                        key={promoPersonal.id}
                        className="list-subsub-block"
                      >
                        <div className="content">
                          <div className="content-promotion-card">
                            <div className="promotion-card">
                              <span className="favorite bb"></span>
                              <div className="promotion-img">
                                <span className="discount">
                                  {' '}
                                  -{promoPersonal.descuento}{' '}
                                </span>
                                <picture className="promotion-img-img">
                                  <img src={promoPersonal.img} />
                                </picture>
                                <div className="terms">
                                  <a className="link">Términos y Condiciones</a>
                                </div>
                              </div>
                              <div className="promotion-content">
                                <a href="/promociones/delivery-hamburguesas/promo-combo-hawaiana">
                                  <h4>{promoPersonal.nombre}</h4>
                                </a>
                                <div className="promotion-content-desc">
                                  {promoPersonal.descripcion}
                                </div>
                                <div className="inferior-info-card">
                                  <div className="content-price">
                                    <p className="price">
                                      S/. {promoPersonal.precio_actual}
                                    </p>
                                    <p className="real-price">
                                      S/. {promoPersonal.precio_antiguo}
                                    </p>
                                  </div>
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
                  <div className="btn-next"></div>
                  <div className="btn-prev"></div>
                  <SwiperComponent options={complementosOptions}>
                    {complementos.data?.map((complemento) => (
                      <SwiperSlide key={complemento.id}>
                        <Card {...complemento} />
                      </SwiperSlide>
                    ))}
                  </SwiperComponent>
                </div>
              </div>
              <div id="2">
                <h2 className="subcatTitle">
                  <span
                    data-categoryid="0"
                    id="subcatTitle-97"
                    className="subcatTitle"
                  >
                    <div className="person">
                      <GrUserManager size={'32px'} />
                      <GrUserManager size={'25px'} />
                    </div>
                    Promociones para 2
                  </span>
                </h2>
                <div className="list-promociones list-promo-horizontal">
                  <SwiperComponent
                    options={promocionesPersonalesOptions}
                    className="swiper-promo-personal"
                  >
                    <div className="btn-next-2"></div>
                    <div className="btn-prev-2"></div>
                    {promosDos.data?.map((promoPD) => (
                      <SwiperSlide
                        key={promoPD.id}
                        className="list-subsub-block"
                      >
                        <div className="content">
                          <div className="content-promotion-card">
                            <div className="promotion-card">
                              <span className="favorite bb"></span>
                              <div className="promotion-img">
                                <span className="discount">
                                  {' '}
                                  -{promoPD.descuento}{' '}
                                </span>
                                <picture className="promotion-img-img">
                                  <img src={promoPD.img} />
                                </picture>
                                <div className="terms">
                                  <a className="link">
                                    {promoPD.terminos_negro ||
                                      promoPD.terminos_blanco}
                                  </a>
                                </div>
                              </div>
                              <div className="promotion-content">
                                <a href="/promociones/delivery-hamburguesas/promo-combo-hawaiana">
                                  <h4>
                                    {promoPD.nombre_azul ||
                                      promoPD.nombre_negro}
                                  </h4>
                                </a>
                                <div className="promotion-content-desc">
                                  {promoPD.descripcion}
                                </div>
                                <div className="inferior-info-card">
                                  <div className="content-price">
                                    <p className="price">
                                      S/. {promoPD.precio_actual}
                                    </p>
                                    <p className="real-price">
                                      S/. {promoPD.precio_antiguo}
                                    </p>
                                  </div>
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
                  <div className="btn-next"></div>
                  <div className="btn-prev"></div>
                  <SwiperComponent options={complementosOptions}>
                    {complementos.data?.map((complemento) => (
                      <SwiperSlide key={complemento.id}>
                        <Card {...complemento} />
                      </SwiperSlide>
                    ))}
                  </SwiperComponent>
                </div>
              </div>
              <div id="3">
                <h2 className="subcatTitle">
                  <span
                    data-categoryid="0"
                    id="subcatTitle-97"
                    className="subcatTitle"
                  >
                    <div className="person child-2">
                      <GrUserManager size={'25px'} />
                      <GrUserManager size={'25px'} />
                      <GrUserManager size={'25px'} />
                    </div>
                    Promociones para compartir
                  </span>
                </h2>
                <div className="list-promociones list-promo-horizontal">
                  <SwiperComponent
                    options={promocionesPersonalesOptions}
                    className="swiper-promo-personal"
                  >
                    <div className="btn-next-2"></div>
                    <div className="btn-prev-2"></div>
                    {promosCompartir.data?.map((promoC) => (
                      <SwiperSlide
                        key={promoC.id}
                        className="list-subsub-block"
                      >
                        <div className="content">
                          <div className="content-promotion-card">
                            <div className="promotion-card">
                              <span className="favorite bb"></span>
                              <div className="promotion-img">
                                <span className="discount">
                                  {' '}
                                  -{promoC.descuento}{' '}
                                </span>
                                <picture className="promotion-img-img">
                                  <img src={promoC.img} />
                                </picture>
                                <div className="terms">
                                  <a className="link">
                                    {' '}
                                    {promoC.terminos_blanco ||
                                      promoC.terminos_negro}{' '}
                                  </a>
                                </div>
                              </div>
                              <div className="promotion-content">
                                <a href="/promociones/delivery-hamburguesas/promo-combo-hawaiana">
                                  <h4>
                                    {promoC.nombre_negro || promoC.nombre_azul}
                                  </h4>
                                </a>
                                <div className="promotion-content-desc">
                                  {promoC.descripcion}
                                </div>
                                <div className="inferior-info-card">
                                  <div className="content-price">
                                    <p className="price">
                                      S/. {promoC.precio_actual}
                                    </p>
                                    <p className="real-price">
                                      S/. {promoC.precio_antiguo}
                                    </p>
                                  </div>
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
                  <div className="btn-next"></div>
                  <div className="btn-prev"></div>
                  <SwiperComponent options={complementosOptions}>
                    {complementos.data?.map((complemento) => (
                      <SwiperSlide key={complemento.id}>
                        <Card {...complemento} />
                      </SwiperSlide>
                    ))}
                  </SwiperComponent>
                </div>
              </div>
              <div id="4">
                <h2 className="subcatTitle">
                  <span
                    data-categoryid="0"
                    id="subcatTitle-97"
                    className="subcatTitle"
                  >
                    Cupones
                  </span>
                </h2>
                <div className="list-promociones list-promo-horizontal">
                  <SwiperComponent
                    options={promocionesPersonalesOptions}
                    className="swiper-promo-personal"
                  >
                    <div className="btn-next-2"></div>
                    <div className="btn-prev-2"></div>
                    {cupones.data?.map((cupon) => (
                      <SwiperSlide key={cupon.id} className="list-subsub-block">
                        <div className="content">
                          <div className="content-promotion-card">
                            <div className="promotion-card">
                              <span className="favorite bb"></span>
                              <div className="promotion-img">
                                {cupon.descuento && (
                                  <span className="discount">
                                    {' '}
                                    -{cupon.descuento}{' '}
                                  </span>
                                )}
                                <picture className="promotion-img-img">
                                  <img src={cupon.img} />
                                </picture>
                              </div>
                              <div className="promotion-content">
                                <a href="/promociones/delivery-hamburguesas/promo-combo-hawaiana">
                                  <h4>{cupon.nombre}</h4>
                                </a>
                                <div className="promotion-content-desc">
                                  {cupon.descripcion}
                                </div>
                                <div className="extra-text-visible">
                                  <div
                                    className="extra-text"
                                    style={{ color: '#173083' }}
                                  >
                                    {cupon.aviso}
                                  </div>
                                </div>
                                <div className="inferior-info-card">
                                  <div className="content-price">
                                    <p className="price">
                                      S/. {cupon.precio_actual}
                                    </p>
                                    {cupon.precio_antiguo && (
                                      <p className="real-price">
                                        S/. {cupon.precio_antiguo}
                                      </p>
                                    )}
                                  </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to={PathConstants.CART} state={{ background: location }}>
        <div className="fixed-ver-car">
          <div
            className="btn-ver-car"
            style={{ backgroundColor: 'rgb(23, 48, 131)' }}
          >
            <span className="btn-ver-car-label" onClick={handleVerCarrito}>
              ver carrito
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Promociones;
