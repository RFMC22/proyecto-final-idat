import { useEffect, useState } from 'react';
import './../../styles/Cart.css';
import { ComplementoResponse } from '../../interfaces';
import { getComplementos } from '../../services/fetchComplementos';
import CartSwiper from './CartSwiper';
import { FaPencil } from 'react-icons/fa6';
import { CiTrash } from 'react-icons/ci';
import { GoChevronDown } from 'react-icons/go';
import { IoIosClose } from 'react-icons/io';
import useShopping from '../../hooks/useShopping';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoAlert } from 'react-icons/go';
import { Counter } from '..';
import { PathConstants } from '../../utils';

const Cart = () => {
  const { setCartState, cartState, shoppingList, setNumberOrders, selectLocal } =
    useShopping();

  const subTotal = [
    { id: 1, subTotal: 0 },
    { id: 2, subTotal: 0 },
    { id: 3, subTotal: 0 },
    { id: 4, subTotal: 0 },
    { id: 5, subTotal: 0 },
  ];
  let accumulateSubTotal = 0;

  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    setCartState(false);
    if (location.pathname === PathConstants.CHECKOUT) {
      navigate(1);
    } else {
      navigate(-1);
    }
  };
  const handleGoToCheckout = () => {
    setCartState(false);
    navigate(PathConstants.CHECKOUT);
  };
  const [complementos, setComplementos] = useState<ComplementoResponse>({});

  useEffect(() => {
    const getDataComplementos = async () => {
      const data = await getComplementos();
      return setComplementos(data);
    };
    // setCartState(true);
    getDataComplementos();
  }, []);

  const isDisabled = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    return currentHour >= 23 || currentHour < 11 // Disable button between 11 pm and 10 am
  };

  if (Object.keys(shoppingList).length !== 0) {
    let totalComplements = [
      { id: 1, subTotal: 0 },
      { id: 2, subTotal: 0 },
      { id: 3, subTotal: 0 },
      { id: 4, subTotal: 0 },
      { id: 5, subTotal: 0 },
    ];
    let totalExtraSauces = [
      { id: 1, subTotal: 0 },
      { id: 2, subTotal: 0 },
      { id: 3, subTotal: 0 },
      { id: 4, subTotal: 0 },
      { id: 5, subTotal: 0 },
    ];
    let totalExtraCombos = [
      { id: 1, subTotal: 0 },
      { id: 2, subTotal: 0 },
      { id: 3, subTotal: 0 },
      { id: 4, subTotal: 0 },
      { id: 5, subTotal: 0 },
    ];

    shoppingList &&
      shoppingList.forEach((shoppingItem: any, index: any) => {
        let totalComplement = 0;
        shoppingItem.extras.complements &&
          shoppingItem.extras.complements.forEach((complement: any) => {
            totalComplement += complement.quantity * complement.price;
          });
        totalComplements[index].subTotal = totalComplement;
      });

    shoppingList &&
      shoppingList.forEach((shoppingItem: any, index: any) => {
        let totalExtraSauce = 0;
        shoppingItem.extras.extra_sauces &&
          shoppingItem.extras.extra_sauces.forEach((sauce: any) => {
            totalExtraSauce += sauce.quantity * sauce.price;
          });
        totalExtraSauces[index].subTotal = totalExtraSauce;
      });

    shoppingList &&
      shoppingList.forEach((shoppingItem: any, index: any) => {
        let totalExtraCombo = 0;
        shoppingItem.extras.extra_combos &&
          shoppingItem.extras.extra_combos.forEach((sauce: any) => {
            totalExtraCombo += sauce.quantity * sauce.price;
          });
        totalExtraCombos[index].subTotal = totalExtraCombo;
      });

    shoppingList &&
      shoppingList.forEach((shoppingItem: any, index: any) => {
        subTotal[index].subTotal = parseFloat(
          (
            (totalComplements[index].subTotal +
              totalExtraSauces[index].subTotal +
              shoppingItem.unit_price) *
            shoppingItem.quantity
          ).toFixed(2)
        );
      });

    subTotal &&
      subTotal.forEach((sub: any) => {
        accumulateSubTotal += sub.subTotal;
        accumulateSubTotal = parseFloat(accumulateSubTotal.toFixed(2));
      });
  }

  if (Object.keys(shoppingList).length !== 0) {
    setNumberOrders(shoppingList.length);
  }

  const [readMoreState, setReadMoreState] = useState(false);

  const handleReadMore = () => {
    setReadMoreState(!readMoreState);
  };

  return (
    <>
      {cartState && (
        <>
          <div className="blackscreen"></div>
          <section className="Cart">
            <div className="cart-header flex">
              <p className="cart-address">
                Entregar en: <Link to={`${PathConstants.RECOJO}/recojo`} className='location'> {selectLocal.sede} </Link>
              </p>
              <GoChevronDown className="select" />
              <IoIosClose className="close" onClick={handleClose} />
            </div>
            {Object.keys(shoppingList).length !== 0 ? (
              <>
                <div className="cart-container">
                  <div className="cart-title-container">
                    <div className="center">
                      {isDisabled() && (
                        <p className="close-store">
                          <GoAlert className="icon-alert" />
                          Nuestra tienda está cerrada, regresa de 10:00PM a
                          11:00AM.
                        </p>
                      )}
                    </div>
                    <h2 className="cart-title">Tu Carrito</h2>
                    <p className="cart-description">
                      <span className="cart-question">
                        ¿Cuentas con cupones de Dsct.?
                      </span>
                      Ingrésalos en el siguiente paso
                    </p>
                  </div>
                  {shoppingList.map((shoppingItem: any, index: any) => (
                    <div key={index}>
                      <div className="cart-shoppingList">
                        <div className="shopping-item">
                          <div className="shoppint-item-left">
                            <div className="shopping-left">
                              <div className="edit">
                                <FaPencil className="edit-icon" />
                              </div>
                              <div className="image-container">
                                <img
                                  src="https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-cyber-parrillero-marzo-2024.jpg"
                                  alt="product image"
                                />
                              </div>
                              <div className="shopping-text">
                                <p className="shopping-name">
                                  <span className="shopping-name-cantidad">{`0${shoppingItem.quantity} `}</span>
                                  x
                                  {` ${shoppingItem.name.split(' ')[0]} ${
                                    shoppingItem.name.split(' ')[1]
                                  } ${shoppingItem.name.split(' ')[2]} `}
                                </p>
                                <p className="shopping-price">{`S/. ${subTotal[index].subTotal}`}</p>
                              </div>
                            </div>
                            {readMoreState && (
                              <div className="shopping-details">
                                {shoppingItem.extras.soda ? (
                                  <div className="shopping-details-item">
                                    <p className="shopping-details-question">
                                      Elige el sabor de tu gaseosa
                                    </p>
                                    <p className="shopping-details-answer">
                                      {`1 x ${shoppingItem.extras.soda[0].type}`}
                                    </p>
                                  </div>
                                ) : (
                                  ''
                                )}

                                {shoppingItem.extras.size ? (
                                  <div className="shopping-details-item">
                                    <p className="shopping-details-question">
                                      Elige el tamaño de tus papas
                                    </p>
                                    <p className="shopping-details-answer">
                                      {`1 x ${shoppingItem.extras.size[0].type}`}
                                    </p>
                                  </div>
                                ) : (
                                  ''
                                )}

                                {shoppingItem.extras.complements ? (
                                  <div className="shopping-details-item">
                                    <p className="shopping-details-question">
                                      ¿Desea algun extra?
                                    </p>
                                    {shoppingItem.extras.complements.map(
                                      (complemento: any) => (
                                        <p className="shopping-details-answer">
                                          {`${complemento.quantity} x ${complemento.type}`}
                                        </p>
                                      )
                                    )}
                                  </div>
                                ) : (
                                  ''
                                )}
                              </div>
                            )}
                          </div>

                          <div className="shopping-right">
                            <div className="actions">
                              <CiTrash className="trash-icon" />
                              <p className="readMore" onClick={handleReadMore}>
                                Leer más
                              </p>
                            </div>
                            {/* <Counter myclass="counter-cart" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="cart-shopping-calculations">
                    <div className="subtotal">
                      <p>Subtotal</p>
                      <p>{`S/. ${accumulateSubTotal}`}</p>
                    </div>
                    <div className="delivery">
                      <p>Delivery</p>
                      <p>S/ 0.00</p>
                    </div>
                  </div>
                  <div className="cart-shopping-calculations shopping-result">
                    <p>Total a pagar</p>
                    <p>{`S/. ${accumulateSubTotal}`}</p>
                  </div>
                </div>
                <div className="complementos">
                  <h3 className="complementos-title">Tambien agrega:</h3>

                  {complementos.data ? (
                    <CartSwiper complementos={complementos.data} />
                  ) : (
                    ''
                  )}
                </div>

                <div className="cart-container cart-container-sticky">
                  <div className="btns">
                    <Link to={PathConstants.CHECKOUT}>
                      <button className="btn btn-rojo" disabled={isDisabled()} onClick={handleGoToCheckout}>
                        <div className="circle">1</div>
                        IR A PAGAR <span>{`S/. ${accumulateSubTotal}`}</span>
                      </button>
                    </Link>


                    <button className="btn btn-blanco">SEGUIR COMPRANDO</button>
                  </div>
                </div>
              </>
            ) : (
              <div className="empty-cart">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4My44MDMiIGhlaWdodD0iNTYuNDk0IiB2aWV3Qm94PSIwIDAgODMuODAzIDU2LjQ5NCI+PHBhdGggZD0iTTE4LjA2NCw1NS40OTRhNy41NDIsNy41NDIsMCwwLDEtNy4yNDctNi4xNjFMNS42OTUsMTkuMTkzYTYuMzI2LDYuMzI2LDAsMCwxLS4wODctMS4wMTVBNi43MjUsNi43MjUsMCwwLDEsMCwxMS41NDJ2LTQuOEE2LjczMiw2LjczMiwwLDAsMSw2LjcsMEg3Ni4xMTRBNi43MjYsNi43MjYsMCwwLDEsODIuOCw2Ljc0NXY0LjhhNi43MjcsNi43MjcsMCwwLDEtNS42LDYuNjM2LDUuODgzLDUuODgzLDAsMCwxLS4wOTMsMS4wMTVsLTUuMTIzLDMwLjE0YTcuNTQyLDcuNTQyLDAsMCwxLTcuMjQ4LDYuMTYxWk0xNyw0OC4yNjlhMS4yODgsMS4yODgsMCwwLDAsMS4wNjEuOTA2SDY0LjczOGExLjMsMS4zLDAsMCwwLDEuMDY3LS45MDZsNS4xLTI5Ljk3Ny01OS0uMDA1Wk02LjI3NCw2Ljc0NXY0LjhhLjQzNC40MzQsMCwwLDAsLjQyMi40MjZINzYuMTE0YS40MjkuNDI5LDAsMCwwLC40MTYtLjQyNnYtNC44YS40MzQuNDM0LDAsMCwwLS40MTYtLjQyNkg2LjdBLjQzOS40MzksMCwwLDAsNi4yNzQsNi43NDVaTTUyLjA2NSw0MS4wODJ2LTE1LjVhMy4xMzgsMy4xMzgsMCwxLDEsNi4yNzYsMHYxNS41YTMuMTM4LDMuMTM4LDAsMSwxLTYuMjc2LDBabS0xMy44LDB2LTE1LjVhMy4xMzcsMy4xMzcsMCwxLDEsNi4yNzMsMHYxNS41YTMuMTM3LDMuMTM3LDAsMSwxLTYuMjczLDBabS0xMy44LDB2LTE1LjVhMy4xMzcsMy4xMzcsMCwxLDEsNi4yNzQsMHYxNS41YTMuMTM3LDMuMTM3LDAsMSwxLTYuMjc0LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUgMC41KSIgZmlsbD0iI2UxMGIxOSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDApIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4="
                  alt="canasta vacia"
                />
                <p className="empty-cart-title">Tu canasta está vacía</p>
                <p className="empty-cart-subtitle">
                  Te invitamos a volver a nuestras tiendas y agregar productos a
                  tu canasta
                </p>
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default Cart;
