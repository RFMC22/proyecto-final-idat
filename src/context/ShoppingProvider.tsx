import { createContext, useState } from 'react';
import {
  ComplementoResponse,
  CuponResponse,
  PolloResponse,
  PromocionCompartirResponse,
  PromocionDosResponse,
  PromocionPersonalResponse,
  ShoppingProviderProps,
} from '../interfaces';
import {
  getComplementos,
  getPollo,
  getPromosCompartir,
  getPromosDos,
  getPromosPersonales,
} from '../services';
import {
  OrderItem,
  iShoppingContext,
  iShoppingType,
} from '../interfaces/IShopping';
import { getCupones } from '../services/fetchCupones';

const ShoppingContext = createContext<iShoppingType>(iShoppingContext);

const ShoppingProvider = ({ children }: ShoppingProviderProps) => {
  const [cartState, setCartState] = useState<boolean | null>(false);
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    description: '',
    mainImg: '',
    secondImg: '',
    price: 0,
  });
  const [promosPersonales, setPromosPersonales] =
    useState<PromocionPersonalResponse>({});
  const [promosDos, setPromosDos] = useState<PromocionDosResponse>({});
  const [promosCompartir, setPromosCompartir] =
    useState<PromocionCompartirResponse>({});
  const [complementos, setComplementos] = useState<ComplementoResponse>({});
  const [cupones, setCupones] = useState<CuponResponse>({});
  const [polloQuestions, setPolloQuestions] = useState<PolloResponse>({});
  const [orderList, setOrderList] = useState<OrderItem[]>([]);

  const handleOrderClick = (
    id: string,
    price: number,
    text: string,
    count: number
  ) => {
    const checkOrderList = orderList.some((item) => item.id === id);
    console.log(checkOrderList);
    checkOrderList
      ? setOrderList((prevOrderList) =>
          prevOrderList.map((item) =>
            item.id !== id
              ? item
              : { id: id, price: price, product: text, count: count }
          )
        )
      : setOrderList((prevOrderList) => [
          ...prevOrderList,
          { id: id, price: price, product: text },
        ]);
    const number = {
      nombre: 'mediano',
      price: 0,
    };
    const test = { ...complementos, number };
    console.log({ test });
    showData(orderList);
  };

  const showData = (orderList: any) => {
    orderList && console.log(orderList);
  };

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

  const getPolloData = async () => {
    const polloData = await getPollo();
    polloData && setPolloQuestions(polloData);
  };

  return (
    <ShoppingContext.Provider
      value={{
        cartState,
        setCartState,
        setOrderInfo,
        orderInfo,
        promosPersonales,
        promosDos,
        promosCompartir,
        complementos,
        cupones,
        getDataPromociones,
        polloQuestions,
        getPolloData,
        setOrderList,
        orderList,
        handleOrderClick,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingProvider };

export default ShoppingContext;
