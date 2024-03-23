import { Navigation, Pagination } from 'swiper/modules';
import { SwiperComponent } from '../components/shared'
import useShopping from '../hooks/useShopping'
import '../styles/pages/Cupones.css'
import { SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
const Cupones = () => {
  const {cupones, getDataPromociones} = useShopping();

  useEffect(() => {
    getDataPromociones();
  }, [])
  

  const promocionesPersonalesOptions = {
    slidesPerView:1,
    spaceBetween:30,
    navigation: {
      nextEl: ".btn-next-2",
      prevEl: ".btn-prev-2",
    }, 
    pagination:{
      clickable: true,
    },
    modules:[Navigation, Pagination],
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
      <div className="container">
        <div className="container-main">
          <div className="page-body">
            <h1>Promociones de Hamburguesas para ti con delivery</h1>
          </div>
          <div className="item__cupones">
            <h2 className="subcatTitle">
              <span id="subcatTitle-97" className="subcatTitle blueT">
                Entel Perú
              </span>
            </h2>
            <div className="list-promociones list-promo-horizontal cupones">
              <div className="btn-next-2"></div>
              <div className="btn-prev-2"></div>
              <SwiperComponent options={promocionesPersonalesOptions} className="swiper-promo-personal">
                {cupones.data?.map(cupon => (
                  <SwiperSlide key={cupon.id} className="list-subsub-block">
                    <div className="content">
                      <div className="content-promotion-card">
                        <div className="promotion-card">
                          <span className="favorite bb"></span>
                          <div className="promotion-img">
                            { cupon.descuento && <span className="discount"> -{cupon.descuento} </span>}
                              <picture className="promotion-img-img">
                                  <img src={cupon.img}/>
                              </picture>
                            </div>
                            <div className="promotion-content">
                              <a href="/promociones/delivery-hamburguesas/promo-combo-hawaiana"><h4>{cupon.nombre}</h4></a> 
                              <div className="promotion-content-desc">{cupon.descripcion}</div> 
                              <div className="extra-text-visible">
                                <div className="extra-text" style={{color:'#173083'}}> 
                                  {cupon.aviso}
                                </div>
                              </div>
                              <div className="inferior-info-card">
                                <div className="content-price">
                                  <p className="price">S/. {cupon.precio_actual}</p> 
                                  {cupon.precio_antiguo && <p className="real-price">S/. {cupon.precio_antiguo}</p>}
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
    </section>
  )
}

export default Cupones