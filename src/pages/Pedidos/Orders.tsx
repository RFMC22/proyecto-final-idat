import './../../styles/pages/Orders.css';
import { Breadcrumb } from '../../components';
import { useEffect, useState } from 'react';
import Accordion from '../../components/shared/Accordion';
import ExtraOptionCardComponent from '../../components/shared/ExtraOptionCardComponent';
import { getPreguntas } from '../../services/fetchOrders';

const Orders = () => {
  const [ordersInfo, setOrdersInfo] = useState<any[]>([]);
  const [extrasInfo, setExtrasInfo] = useState<any[]>([]);
  useEffect(() => {
    try {
      const getDataOrders = async () => {
        const data = await getPreguntas();
        return setOrdersInfo(data.data);
      };
      getDataOrders();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(ordersInfo);

  return (
    <>
      <div className="container">
        <section className="Orders">
          <Breadcrumb />
          <div className="order-container">
            <div className="order-right">
              <div className="imgContainer">
                <img
                  src="https://www.bembos.com.pe/_ipx/q_85/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-combo-extrema-nuevo-bb.jpg"
                  alt="combo-extrema-nuevo"
                />
              </div>
            </div>
            <div className="order-details">
              <h1 className="order-title">Combo Extrema</h1>
              <p className="order-description">
                Hamburguesa Extrema a la parrilla: Hamburguesa doble a la
                parrilla con queso edam, tocino, tomate, lechuga y mayonesa.
                Papa mediana y gaseosa de 500 ml.
              </p>

              <Accordion
                title="ELIGE EL TAMAÑO DE TU PAPA"
                className={'accordion-container'}
                id={1}
              >
                <section className="items-container">
                  {ordersInfo[0].combinaciones &&
                    ordersInfo[0].combinaciones.map((extra: any) => {
                      return (
                        <ExtraOptionCardComponent
                          image={extra.imgcomb}
                          btn=""
                          text={extra.titulocomb}
                          width=""
                        />
                      );
                    })}
                </section>
              </Accordion>

              <Accordion
                title="ELIGE EL SABOR DE TU GASEOSA"
                className={'accordion-container'}
                id={1}
              >
                <section className="items-container">
                  {ordersInfo[1].combinaciones &&
                    ordersInfo[1].combinaciones.map((extra: any) => {
                      return (
                        <ExtraOptionCardComponent
                          image={extra.imgcomb}
                          btn=""
                          text={extra.titulocomb}
                          width=""
                        />
                      );
                    })}
                </section>
              </Accordion>

              <Accordion
                title="¿DESEAS AGREGAR EXTRAS?"
                className={'accordion-container'}
                id={1}
              >
                <section className="items-container">
                  {ordersInfo[2].combinaciones &&
                    ordersInfo[2].combinaciones.map((extra: any) => {
                      return (
                        <ExtraOptionCardComponent
                          image={extra.imgcomb}
                          btn=""
                          text={extra.titulocomb}
                          width=""
                        />
                      );
                    })}
                </section>
              </Accordion>

              <Accordion
                title="¿ELIGE TU SALSAS FAVORITAS?"
                className={'accordion-container'}
                id={1}
              >
                <section className="items-container">
                  {ordersInfo[3].combinaciones &&
                    ordersInfo[3].combinaciones.map((extra: any) => {
                      return (
                        <ExtraOptionCardComponent
                          image={extra.imgcomb}
                          btn=""
                          text={extra.titulocomb}
                          width=""
                        />
                      );
                    })}
                </section>
              </Accordion>

              <Accordion
                title="¿DESEAS SALSAS EXTRAS?"
                className={'accordion-container'}
                id={1}
              >
                <section className="items-container">
                  {ordersInfo[4].combinaciones &&
                    ordersInfo[4].combinaciones.map((extra: any) => {
                      return (
                        <ExtraOptionCardComponent
                          image={extra.imgcomb}
                          btn=""
                          text={extra.titulocomb}
                          width=""
                        />
                      );
                    })}
                </section>
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Orders;
