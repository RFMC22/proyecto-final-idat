import { Tabs } from "../components"
import { BsShop } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { PiCarProfile } from "react-icons/pi";

import '../styles/pages/Tiendas.css'
import { TabTitle } from "../utils/GeneralFunctions";
import useShopping from "../hooks/useShopping";
import { useEffect, useState } from "react";

const Tiendas = () => {
  TabTitle('Promociones de Hamburguesas en Perú | Bembos Delivery');
  const {
    getDataPromociones,
    promosDos,
    promosCompartir,
    promosPersonales
  } = useShopping();
  
  useEffect(()=>{
    getDataPromociones();
  },[])

  const [query, setQuery] = useState("");
  function search(data, type_search) {
    if (!data || !Array.isArray(data)) {
      return []
    }
    return data.filter((info) =>
      type_search.some((parameter) => {
        const value = info[parameter];
        return value !== undefined && value.toString().toLowerCase().includes(query)
      })
    );
  }
  const { data: dataPromosDos } = promosDos;
  const searchParametersPromosDos = dataPromosDos ? Object.keys(Object.assign({}, ...dataPromosDos)) : [];
  const filteredPromosDos = search(dataPromosDos, searchParametersPromosDos);

  const { data: dataPromosCompartir } = promosCompartir;
  const searchParametersPromosCompartir = dataPromosCompartir ? Object.keys(Object.assign({}, ...dataPromosCompartir)) : [];
  const filteredPromosCompartir = search(dataPromosCompartir, searchParametersPromosCompartir);

  const { data: dataPromosPersonales } = promosPersonales;
  const searchParametersPromosPersonales = dataPromosPersonales ? Object.keys(Object.assign({}, ...dataPromosPersonales)) : [];
  const filteredPromosPersonales = search(dataPromosPersonales, searchParametersPromosPersonales);
  return (
    <section>
      <Tabs
        elementoIncial={1}
        show={'desktop'}
        elementos= {[
          {id:1,nombre:'Salon'},
          {id:2,nombre:'Call Center'},
          {id:3,nombre:'AutoBembos'}
        ]}
      />
      <div className="container">
        <div className="max-container">
          <div className="container-main tienda">
          <div className="ppromos-buscar-col showMobile">
            <input type="text" placeholder="Buscar producto"
            onChange={(e) => setQuery(e.target.value)}
            />
              <i className="ppromos-lupa"></i>
          </div>
          <Tabs
            elementoIncial={1}
            show={'mobile'}
            elementos= {[
              {id:1,nombre:'Salon'},
              {id:2,nombre:'Call Center'},
              {id:3,nombre:'AutoBembos'}
            ]}
          />
          <div className="page-body">
            <div className="detail-info">
              <h1>
                <span id="subcatTitle-5" className="subcatTitle">
                  <BsShop/>
                    Salón
                </span> &nbsp;
              </h1> 
              <div className="detail-info-right">
                <div id="ppromos-buscar-col" className="ppromos-buscar-col showDesktop">
                  <input type="text" placeholder="Buscar producto"
                  onChange={(e) => setQuery(e.target.value)}
                  />
                  <i className="ppromos-lupa"></i>
                </div> 
                <div id="btn-lugar-cercanow">
                  <a href="" id="btn-lugar-cercano" className="btn-lugar-cercano">
                    <HiOutlineLocationMarker/>
                    Mi local más cercano
                  </a>
                </div>
              </div>
            </div>
            <div className="promociones-familiares">
              <div id="1" className="ppromos-listaProductos">
                <div className="list-promociones list-promo-horizontal">
                  {filteredPromosPersonales.map(promoPersonal => (
                    <div className="content" key={promoPersonal.id}>
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
                  ))}
                </div>
              </div>
              <div id="2" className="ppromos-listaProductos">
                <h2 className="subcatTitle">
                  <span>
                    <LuPhoneCall/>
                  Call Center
                  </span>
                  &nbsp;
                </h2>
                <div className="list-promociones list-promo-horizontal">
                  {filteredPromosCompartir.map(promoC => (
                    <div className="content" key={promoC.id}>
                      <div className="content-promotion-card">
                        <div className="promotion-card">
                          <span className="favorite bb"></span>
                          <div className="promotion-img">
                            <span className="discount"> -{promoC.descuento} </span>
                              <picture className="promotion-img-img">
                                  <img src={promoC.img}/>
                              </picture> 
                              <div className="terms">
                                <a className="link">Términos y Condiciones</a>
                              </div>
                            </div>
                            <div className="promotion-content">
                              <a href="/promociones/delivery-hamburguesas/promo-combo-hawaiana"><h4>{promoC.nombre_azul || promoC.nombre_negro}</h4></a> 
                              <div className="promotion-content-desc">{promoC.descripcion}</div>  
                              <div className="inferior-info-card">
                                <div className="content-price">
                                  <p className="price">S/. {promoC.precio_actual}</p> 
                                  <p className="real-price">S/. {promoC.precio_antiguo}</p></div> 
                                  <button>Ver más</button> 
                                </div> 
                              </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div id="3" className="ppromos-listaProductos">
                <h2 className="subcatTitle">
                  <span>
                    <PiCarProfile/>
                    AutoBembos
                  </span>
                  &nbsp;
                </h2>
                <div className="list-promociones list-promo-horizontal">
                  {filteredPromosDos.map(promoD => (
                      <div className="content" key={promoD.id}>
                        <div className="content-promotion-card">
                          <div className="promotion-card">
                            <span className="favorite bb"></span>
                            <div className="promotion-img">
                              <span className="discount"> -{promoD.descuento} </span>
                                <picture className="promotion-img-img">
                                    <img src={promoD.img}/>
                                </picture> 
                                <div className="terms">
                                  <a className="link">Términos y Condiciones</a>
                                </div>
                              </div>
                              <div className="promotion-content">
                                <a href="/promoDiones/delivery-hamburguesas/promo-combo-hawaiana"><h4>{promoD.nombre_azul || promoD.nombre_negro}</h4></a> 
                                <div className="promotion-content-desc">{promoD.descripcion}</div>  
                                <div className="inferior-info-card">
                                  <div className="content-price">
                                    <p className="price">S/. {promoD.precio_actual}</p> 
                                    <p className="real-price">S/. {promoD.precio_antiguo}</p></div> 
                                    <button>Ver más</button> 
                                  </div> 
                                </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tiendas