import { createContext, useState } from 'react';
import {
  ComplementoResponse,
  CuponResponse,
  PromocionCompartirResponse,
  PromocionDosResponse,
  PromocionPersonalResponse,
  ShoppingProviderProps,
} from '../interfaces';
import {
  getComplementos,
  getPromosCompartir,
  getPromosDos,
  getPromosPersonales,
} from '../services';
import { iShoppingContext, iShoppingType } from '../interfaces/IShopping';
import { getCupones } from '../services/fetchCupones';

const ShoppingContext = createContext<iShoppingType>(iShoppingContext);

// const ShoppingProvider = ({ children }: any) => {
//   const [cartState, setCartState] = useState<boolean | null>(false);

//   // VARIABLES PARA PEDIDOS

//   const [orderTitle, setOrderTitle] = useState<string>('');
//   const [orderDescripcion, setOrderDescripcion] = useState<string | null>('');
//   const [orderMainImage, setOrderMainImage] = useState<string>('');
//   const [orderSecondImage, setOrderSecondImage] = useState<string>('');
//   const [orderBigPrice, setOrderBigPrice] = useState<number>(0);

//   return (
//     <ShoppingContext.Provider
//       value={{
//         cartState,
//         setCartState,
//         setOrderTitle,
//         setOrderDescripcion,
//         setOrderMainImage,
//         setOrderSecondImage,
//         setOrderBigPrice,
//         orderTitle,
//         orderDescripcion,
//         orderMainImage,
//         orderSecondImage,
//         orderBigPrice,
//       }}
//     >
//       </ShoppingContext.Provider>
//   )}


const ShoppingProvider = ({ children }: ShoppingProviderProps) => {
  const [cartState, setCartState] = useState<boolean | null>(false);

  // VARIABLES PARA PEDIDOS

  const [orderTitle, setOrderTitle] = useState<string>('');
  const [orderDescripcion, setOrderDescripcion] = useState<string | null>('');
  const [orderMainImage, setOrderMainImage] = useState<string>('');
  const [orderSecondImage, setOrderSecondImage] = useState<string>('');
  const [orderBigPrice, setOrderBigPrice] = useState<number>(0);

  // OTROS
  const [promosPersonales, setPromosPersonales] =
    useState<PromocionPersonalResponse>({});
  const [promosDos, setPromosDos] = useState<PromocionDosResponse>({});
  const [promosCompartir, setPromosCompartir] =
    useState<PromocionCompartirResponse>({});
  const [complementos, setComplementos] = useState<ComplementoResponse>({});
  const [cupones, setCupones] = useState<CuponResponse>({});

  const getDataPromociones = async () => {
    const [promos, promosD, promosC, complements, cupons] = await Promise.all([
      getPromosPersonales(),
      getPromosDos(),
      getPromosCompartir(),
      getComplementos(),
      getCupones(),
    ]);

    setPromosPersonales(promos);
    setPromosDos(promosD);
    setPromosCompartir(promosC);
    setComplementos(complements);
    setCupones(cupons);
  };

  return (
    <ShoppingContext.Provider
      value={{
        cartState,
        setCartState,
        getDataPromociones,
        promosPersonales,
        promosDos,
        promosCompartir,
        complementos,
        cupones,
        setOrderTitle,
        setOrderDescripcion,
        setOrderMainImage,
        setOrderSecondImage,
        setOrderBigPrice,
        orderTitle,
        orderDescripcion,
        orderMainImage,
        orderSecondImage,
        orderBigPrice,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingProvider };

export default ShoppingContext;
