import './../../styles/pages/Orders.css';
import { Breadcrumb, Counter } from '../../components';
import { useEffect, useState } from 'react';
import Accordion from '../../components/shared/Accordion';
import ExtraOptionCardComponent from '../../components/shared/ExtraOptionCardComponent';
import { getPreguntas } from '../../services/';
import { PreguntasPedido } from '../../interfaces';
import useShopping from '../../hooks/useShopping';
import { useLocation } from 'react-router-dom';
import { BlueBtn } from '../../components/shared';

const Orders = () => {
  const location = useLocation();
  const [address, setAddress] = useState('');
  const [orderQuestions, setOrderQuestions] = useState<PreguntasPedido[]>([]);
  const [accordionBoolean, setAccordionBoolean] = useState({
    accordion1: false,
    accordion2: false,
    accordion3: false,
    accordion4: false,
    accordion5: false,
    accordion6: false,
    accordion7: false,
    accordion8: false,
    accordion9: false,
  });

  const { orderInfo, polloQuestions, getPolloData } = useShopping();

  const getDataOrders = async () => {
    try {
      const data = await getPreguntas();
      return data && setOrderQuestions(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const newAddress = pathSegments[2] || ''; // Handle case when pathSegments[2] is undefined
    // getDataOrders();
    setAddress(newAddress);
  }, [location.pathname]);

  useEffect(() => {
    switch (address) {
      case 'combos':
        setAccordionBoolean({
          accordion1: true,
          accordion2: true,
          accordion3: true,
          accordion4: true,
          accordion5: true,
          accordion6: true,
          accordion7: false,
          accordion8: false,
          accordion9: false,
        });
        getDataOrders();
        console.log('Handling combos...');
        break;
      case 'hamburguesas':
      case 'pollo':
        setAccordionBoolean({
          accordion1: true,
          accordion2: false,
          accordion3: false,
          accordion4: true,
          accordion5: true,
          accordion6: true,
          accordion7: true,
          accordion8: true,
          accordion9: false,
        });
        getPolloData();
        getDataOrders();
        {
          polloQuestions[1] &&
            console.log(polloQuestions[1].preguntas[0].combinaciones);
        }

        console.log('Handling pollo...');
        break;
      default:
        // Handle other cases if necessary
        console.log('Unknown address:', address);
        break;
    }
  }, [address]);

  const strArr: Array<string> = orderInfo.name.split(' ');
  const [activeIds, setActiveIds] = useState<{ [key: string]: string | null }>(
    {}
  );

  const handleImageClick = (accordionTitle: string, id: string) => {
    setActiveIds((prevActiveIds) => ({
      ...prevActiveIds,
      [accordionTitle]: prevActiveIds[accordionTitle] === id ? null : id,
    }));
  };

  return (
    <>
      <div className="container">
        <section className="Orders">
          <Breadcrumb />
          <div className="order-container">
            <div className="order-right">
              <div className="imgContainer">
                <img src={orderInfo.mainImg} alt="combo-extrema-nuevo" />
              </div>
            </div>
            <div className="order-details">
              <h1 className="order-title">{orderInfo.name}</h1>
              <p className="order-description">{orderInfo.description}</p>

              {orderQuestions[0] && (
                <>
                  {accordionBoolean.accordion1 && (
                    <Accordion
                      title={`ELIGE TU HAMBURGUESA ${
                        strArr[strArr.length - 1]
                      }`}
                      className={'accordion-container'}
                      id={1}
                    >
                      <section className="items-container">
                        <ExtraOptionCardComponent
                          image={orderInfo.secondImg}
                          btn=""
                          text={`${orderInfo.name} Mediana +S/0.00`}
                          width=""
                          key={orderInfo.secondImg}
                          id={1}
                          price={0}
                          count={1}
                          isActive={
                            activeIds[orderInfo.name] === orderInfo.secondImg
                          }
                          onClick={() => {
                            handleImageClick(
                              orderInfo.name,
                              orderInfo.secondImg
                            );
                          }}
                        />

                        <ExtraOptionCardComponent
                          image={orderInfo.secondImg}
                          btn=""
                          text={`${orderInfo.name} Grande +S/${orderInfo.price}.00`}
                          width=""
                          key={orderInfo.secondImg + 1}
                          id={1}
                          price={orderInfo.price}
                          count={1}
                          isActive={
                            activeIds[orderInfo.name] ===
                            orderInfo.secondImg + 1
                          }
                          onClick={() =>
                            handleImageClick(
                              orderInfo.name,
                              orderInfo.secondImg + 1
                            )
                          }
                        />
                      </section>
                    </Accordion>
                  )}

                  {accordionBoolean.accordion7 && (
                    <Accordion
                      title={
                        polloQuestions &&
                        polloQuestions[1].preguntas[0].nombrepregunta
                      }
                      className={'accordion-container'}
                      id={2}
                    >
                      <section className="items-container">
                        {polloQuestions[1].preguntas[0].combinaciones &&
                          polloQuestions[1].preguntas[0].combinaciones.map(
                            (extra: any) => {
                              return (
                                <ExtraOptionCardComponent
                                  image={extra.imgcomb}
                                  btn={
                                    <p
                                      style={{
                                        textAlign: 'center',
                                        fontSize: '14px',
                                        fontFamily: 'kulristaRegular',
                                        padding: '2px 0',
                                      }}
                                    >{`+S/.${extra.preccomb}`}</p>
                                  }
                                  text={extra.titulocomb}
                                  width=""
                                  id={extra.nrocomb}
                                  price={extra.preccomb}
                                  key={extra.nrocomb}
                                  count={1}
                                  isActive={
                                    activeIds[extra.imgcomb] === extra.nrocomb
                                  }
                                  onClick={() =>
                                    handleImageClick(
                                      extra.imgcomb,
                                      extra.nrocomb
                                    )
                                  }
                                />
                              );
                            }
                          )}
                      </section>
                    </Accordion>
                  )}
                  {accordionBoolean.accordion8 && (
                    <Accordion
                      title={
                        polloQuestions &&
                        polloQuestions[1].preguntas[0].nombrepregunta
                      }
                      className={'accordion-container'}
                      id={2}
                    >
                      <section className="items-container">
                        {polloQuestions[1].preguntas[1].combinaciones &&
                          polloQuestions[1].preguntas[1].combinaciones.map(
                            (extra: any) => {
                              return (
                                <ExtraOptionCardComponent
                                  image={extra.imgcomb}
                                  btn={''}
                                  text={extra.titulocomb}
                                  width="circle"
                                  key={extra.nrocomb}
                                  id={extra.nrocomb}
                                  price={extra.preccomb}
                                  count={1}
                                  isActive={
                                    activeIds[extra.imgcomb] === extra.nrocomb
                                  }
                                  onClick={() =>
                                    handleImageClick(
                                      extra.imgcomb,
                                      extra.nrocomb
                                    )
                                  }
                                />
                              );
                            }
                          )}
                      </section>
                    </Accordion>
                  )}
                  {accordionBoolean.accordion2 && (
                    <Accordion
                      title="ELIGE EL TAMAÑO DE TU PAPA"
                      className={'accordion-container'}
                      id={1}
                    >
                      <section className="items-container">
                        {orderQuestions[0].combinaciones &&
                          orderQuestions[0].combinaciones.map((extra: any) => {
                            return (
                              <ExtraOptionCardComponent
                                image={extra.imgcomb}
                                btn=""
                                text={extra.titulocomb}
                                width=""
                                key={extra.nrocomb}
                                id={2}
                                price={extra.preccomb}
                                count={1}
                                isActive={activeIds['1'] === extra.nrocomb}
                                onClick={() =>
                                  handleImageClick('1', extra.nrocomb)
                                }
                              />
                            );
                          })}
                      </section>
                    </Accordion>
                  )}
                  {accordionBoolean.accordion3 && (
                    <Accordion
                      title="ELIGE EL SABOR DE TU GASEOSA"
                      className={'accordion-container'}
                      id={2}
                    >
                      <section className="items-container">
                        {orderQuestions[1].combinaciones &&
                          orderQuestions[1].combinaciones.map((extra: any) => {
                            return (
                              <ExtraOptionCardComponent
                                image={extra.imgcomb}
                                btn={''}
                                text={extra.titulocomb}
                                width=""
                                key={extra.nrocomb}
                                id={3}
                                price={extra.preccomb}
                                count={1}
                                isActive={
                                  activeIds[extra.title] === extra.nrocomb
                                }
                                onClick={() =>
                                  handleImageClick(extra.title, extra.nrocomb)
                                }
                              />
                            );
                          })}
                      </section>
                    </Accordion>
                  )}
                  {accordionBoolean.accordion4 && (
                    <Accordion
                      title="¿DESEAS AGREGAR EXTRAS?"
                      className={'accordion-container'}
                      id={3}
                    >
                      <section className="items-container">
                        {orderQuestions[2].combinaciones &&
                          orderQuestions[2].combinaciones.map((extra: any) => {
                            return (
                              <ExtraOptionCardComponent
                                image={extra.imgcomb}
                                btn={<Counter myclass="Counter" />}
                                text={extra.titulocomb}
                                width="width-136"
                                key={extra.nrocomb}
                                id={extra.nrocomb}
                                price={extra.preccomb}
                                count={1}
                                isActive={
                                  activeIds[extra.imgcomb] === extra.nrocomb
                                }
                                onClick={() =>
                                  handleImageClick(extra.titulocomb, '0')
                                }
                              />
                            );
                          })}
                      </section>
                    </Accordion>
                  )}
                  {accordionBoolean.accordion5 && (
                    <Accordion
                      title="¿ELIGE TU SALSAS FAVORITAS?"
                      className={'accordion-container'}
                      id={4}
                    >
                      <section className="items-container">
                        {orderQuestions[3].combinaciones &&
                          orderQuestions[3].combinaciones.map((extra: any) => {
                            return (
                              <ExtraOptionCardComponent
                                image={extra.imgcomb}
                                btn={''}
                                text={extra.titulocomb}
                                width="circle"
                                key={extra.nrocomb}
                                id={extra.nrocomb}
                                price={extra.preccomb}
                                count={1}
                                isActive={
                                  activeIds[extra.imgcomb] === extra.nrocomb
                                }
                                onClick={() =>
                                  handleImageClick(extra.imgcomb, extra.nrocomb)
                                }
                              />
                            );
                          })}
                      </section>
                    </Accordion>
                  )}
                  {accordionBoolean.accordion6 && (
                    <Accordion
                      title="¿DESEAS SALSAS EXTRAS?"
                      className={'accordion-container'}
                      id={5}
                    >
                      <section className="items-container">
                        <ExtraOptionCardComponent
                          image={orderQuestions[4].combinaciones[0].imgcomb}
                          btn={''}
                          text={orderQuestions[4].combinaciones[0].titulocomb}
                          width=""
                          key={orderQuestions[4].combinaciones[0].nrocomb}
                          id={orderQuestions[4].combinaciones[0].nrocomb}
                          price={orderQuestions[4].combinaciones[0].preccomb}
                          count={1}
                          isActive={
                            activeIds[
                              orderQuestions[4].combinaciones[0].titulocomb
                            ] === orderQuestions[4].combinaciones[0].imgcomb
                          }
                          onClick={() =>
                            handleImageClick(
                              orderQuestions[4].combinaciones[0].titulocomb,
                              orderQuestions[4].combinaciones[0].imgcomb
                            )
                          }
                        />

                        {orderQuestions[4].combinaciones && (
                          <>
                            {orderQuestions[4].combinaciones
                              .filter((item) => item.nrocomb !== 26)
                              .map((extra: any) => (
                                <ExtraOptionCardComponent
                                  image={extra.imgcomb}
                                  btn={<Counter myclass="Counter" />}
                                  text={extra.titulocomb}
                                  width=""
                                  key={extra.nrocomb}
                                  id={extra.nrocomb}
                                  price={extra.preccomb}
                                  isActive={
                                    activeIds[extra.title] === extra.nrocomb
                                  }
                                  onClick={() =>
                                    handleImageClick(extra.title, '2')
                                  }
                                />
                              ))}
                          </>
                        )}
                      </section>
                    </Accordion>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </div>
      <div className="orders-low-bar">
        <div className="low-bar-content">
          <div className="low-bar-flex-container">
            <div className="low-bar-flex ">
              <span className="low-bar-text">Cantidad:</span>

              <Counter myclass="low-bar-cart" />
            </div>
            <div className="low-bar-right">
              <p className="acum-points">ACUMULAS 0 PTS</p>
              <BlueBtn
                text={`AGREGAR S/.32.80`}
                myclass="bluetBtn low-bar-blueBtn"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
