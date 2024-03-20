import { useEffect, useState } from 'react';
import './../../styles/Cart.css';

import { ComplementoResponse } from '../../interfaces';
import { getComplementosCart } from '../../services/fetchComplementos';
import CartSwiper from './CartSwiper';
import { FaPencil } from 'react-icons/fa6';
import { CiTrash } from 'react-icons/ci';
import { GoChevronDown } from 'react-icons/go';
import { IoIosClose } from 'react-icons/io';

const Cart = () => {
  const [complementos, setComplementos] = useState<ComplementoResponse>({});

  useEffect(() => {
    const getComplementos = async () => {
      const data = await getComplementosCart();
      return setComplementos(data);
    };

    getComplementos();
  }, []);

  return (
    <>
      <div className="blackscreen"></div>
      <section className="Cart">
        <div className="cart-header flex">
          <p className="cart-address">
            Entregar en: <span>Av. Benavides N°1821</span>
          </p>
          <GoChevronDown className="select" />
          <IoIosClose className="close" />
        </div>

        <div className="cart-container">
          <div className="cart-title-container">
            <h2 className="cart-title">Tu Carrito</h2>
            <p className="cart-description">
              <span className="cart-question">
                ¿Cuentas con cupones de Dsct.?
              </span>
              Ingrésalos en el siguiente paso
            </p>
          </div>
          <div className="cart-shoppingList">
            <div className="shopping-item">
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
                    <span className="shopping-name-cantidad">02</span>x Cyber
                    Parrillero
                  </p>
                  <p className="shopping-price">S/. 41.60</p>
                </div>
              </div>
              <div className="shopping-right">
                <div className="actions">
                  <CiTrash className="trash-icon" />
                  <p className="readMore">Leer más</p>
                </div>
                <div className="change-quantity">
                  <button className="btn-quantity btn-decrease">-</button>
                  <p className="number-quantity">2</p>
                  <button className="btn-quantity btn-increase">+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-shopping-calculations">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>S/ 41.60</p>
            </div>
            <div className="delivery">
              <p>Delivery</p>
              <p>S/ 0.00</p>
            </div>
          </div>
          <div className="cart-shopping-calculations shopping-result">
            <p>Total a pagar</p>
            <p>S/ 41.60</p>
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

        <div className="cart-container">
          <div className="btns">
            <button className="btn btn-rojo">
              <div className="circle">1</div>
              IR A PAGAR <span>S/. 70.40</span>
            </button>
            <button className="btn btn-blanco">SEGUIR COMPRANDO</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
