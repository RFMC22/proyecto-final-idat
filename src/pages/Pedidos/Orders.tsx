import './../../styles/pages/Orders.css';
import { Breadcrumb, Counter } from '../../components';
import { useEffect, useState } from 'react';
import Accordion from '../../components/shared/Accordion';
import ExtraOptionCardComponent from '../../components/shared/ExtraOptionCardComponent';
import { getPreguntas } from '../../services/';
import { PreguntasPedido } from '../../interfaces';
import useShopping from '../../hooks/useShopping';

const Orders = () => {
  const [ordersInfo, setOrdersInfo] = useState<PreguntasPedido[]>([]);
  const {
    orderTitle,
    orderDescripcion,
    orderMainImage,
    orderSecondImage,
    orderBigPrice,
  } = useShopping();

  try {
    useEffect(() => {
      const getDataOrders = async () => {
        const data = await getPreguntas();
        return setOrdersInfo(data.data);
      };
      getDataOrders();
    }, []);
  } catch (error) {
    console.log(error);
  }

  const strArr: Array<string> = orderTitle.split(' ');
  console.log(strArr[strArr.length - 1]);

  return (
    <>
      <div className="container">
        <section className="Orders">
          <Breadcrumb />
          <div className="order-container">
            <div className="order-right">
              <div className="imgContainer">
                <img src={orderMainImage} alt="combo-extrema-nuevo" />
              </div>
            </div>
            <div className="order-details">
              <h1 className="order-title">{orderTitle}</h1>
              <p className="order-description">{orderDescripcion}</p>

              {ordersInfo[0] && (
                <>
                  <Accordion
                    title={`ELIGE TU HAMBURGUESA ${strArr[strArr.length - 1]}`}
                    className={'accordion-container'}
                    id={1}
                  >
                    <section className="items-container">
                      <ExtraOptionCardComponent
                        image={orderSecondImage}
                        btn=""
                        text={`${orderTitle} Mediana +S/0.00`}
                        width=""
                      />

                      <ExtraOptionCardComponent
                        image={orderSecondImage}
                        btn=""
                        text={`${orderTitle} Grande +S/${orderBigPrice}.00`}
                        width=""
                      />
                    </section>
                  </Accordion>
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
                              key={extra.titulocomb}
                            />
                          );
                        })}
                    </section>
                  </Accordion>

                  <Accordion
                    title="ELIGE EL SABOR DE TU GASEOSA"
                    className={'accordion-container'}
                    id={2}
                  >
                    <section className="items-container">
                      {ordersInfo[1].combinaciones &&
                        ordersInfo[1].combinaciones.map((extra: any) => {
                          return (
                            <ExtraOptionCardComponent
                              image={extra.imgcomb}
                              btn={''}
                              text={extra.titulocomb}
                              width=""
                              key={extra.titulocomb}
                            />
                          );
                        })}
                    </section>
                  </Accordion>

                  <Accordion
                    title="¿DESEAS AGREGAR EXTRAS?"
                    className={'accordion-container'}
                    id={3}
                  >
                    <section className="items-container">
                      {ordersInfo[2].combinaciones &&
                        ordersInfo[2].combinaciones.map((extra: any) => {
                          return (
                            <ExtraOptionCardComponent
                              image={extra.imgcomb}
                              btn={<Counter myclass="Counter" />}
                              text={extra.titulocomb}
                              width="width-136"
                              key={extra.titulocomb}
                            />
                          );
                        })}
                    </section>
                  </Accordion>

                  <Accordion
                    title="¿ELIGE TU SALSAS FAVORITAS?"
                    className={'accordion-container'}
                    id={4}
                  >
                    <section className="items-container">
                      {ordersInfo[3].combinaciones &&
                        ordersInfo[3].combinaciones.map((extra: any) => {
                          return (
                            <ExtraOptionCardComponent
                              image={extra.imgcomb}
                              btn={''}
                              text={extra.titulocomb}
                              width="circle"
                              key={extra.titulocomb}
                            />
                          );
                        })}
                    </section>
                  </Accordion>

                  <Accordion
                    title="¿DESEAS SALSAS EXTRAS?"
                    className={'accordion-container'}
                    id={5}
                  >
                    <section className="items-container">
                      {ordersInfo[4].combinaciones &&
                        ordersInfo[4].combinaciones.map((extra: any) => {
                          return (
                            <ExtraOptionCardComponent
                              image={extra.imgcomb}
                              btn={<Counter myclass="Counter" />}
                              text={extra.titulocomb}
                              width=""
                              key={extra.titulocomb}
                            />
                          );
                        })}
                    </section>
                  </Accordion>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Orders;
