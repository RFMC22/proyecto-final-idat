import { createContext, useEffect, useState } from 'react';
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
  let accumulateList = {};
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    description: '',
    mainImg: '',
    secondImg: '',
    price: 0,
    bigSizePrice: 0,
  });
  const [promosPersonales, setPromosPersonales] =
    useState<PromocionPersonalResponse>({});
  const [promosDos, setPromosDos] = useState<PromocionDosResponse>({});
  const [promosCompartir, setPromosCompartir] =
    useState<PromocionCompartirResponse>({});
  const [complementos, setComplementos] = useState<ComplementoResponse>({});
  const [cupones, setCupones] = useState<CuponResponse>({});
  const [polloQuestions, setPolloQuestions] = useState<PolloResponse>({});
  const [baseList, setBaseList] = useState<OrderItem[]>([]);
  let extras = {};
  let hamburguerOrder = {};
  const [generalCounter, setGeneralCounter] = useState(1);
  // const [orderBase, setOrderBase] = useState({
  //   name: '',
  //   quantity: 0,
  //   unit_price: 0,
  // });
  const handleOrderClick = (
    id: any,
    price: number,
    text: string,
    count: any,
    question: number
  ) => {
    const checkBaseList = baseList.some((item) => item.id === id);
    console.log(checkBaseList);
    checkBaseList
      ? setBaseList((prevBaseList) =>
          prevBaseList.map((item) =>
            item.id !== id
              ? item
              : {
                  id: id,
                  price: price,
                  product: text,
                  count: count,
                  question: question,
                }
          )
        )
      : setBaseList((prevBaseList) => [
          ...prevBaseList,
          {
            id: id,
            price: price,
            product: text,
            count: count,
            question: question,
          },
        ]);
    // const number = {
    //   nombre: 'mediano',
    //   price: 0,
    // };
    // const test = { ...complementos, number };
    // console.log({ test });
  };

  useEffect(() => {
    // showData(baseList);
    orderTheList(baseList);
  }, [baseList]);

  useEffect(() => {
    setGeneralCounter(1);
  }, [location.pathname]);
  // useEffect(() => {
  //   showData(orderBase);
  // }, [orderBase]);

  const orderTheList = (baseList: any) => {
    const burguerItem = baseList.filter((item: any) => item.question === 1);
    if (burguerItem[0]) {
      hamburguerOrder = {
        name: burguerItem[0].product,
        quantity: generalCounter,
        unit_price: burguerItem[0].price,
      };
    }

    const friesItem = baseList.filter((item: any) => item.question === 2);
    if (friesItem[0]) {
      extras = {
        ...extras,
        size: [{ type: friesItem[0].product, price: friesItem[0].price }],
      };
    }

    const sodaItem = baseList.filter((item: any) => item.question === 3);
    if (sodaItem[0]) {
      extras = {
        ...extras,
        soda: [
          {
            type: sodaItem[0].product,
            price: sodaItem[0].price,
            selected: true,
          },
        ],
      };
    }
    const saucestItem = baseList.filter((item: any) => item.question === 5);
    if (saucestItem[0]) {
      extras = {
        ...extras,
        sauces: saucestItem.map((sauce: any) => ({
          type: sauce.product,
          selected: true,
        })),
      };
    }
    const complementsItem = baseList.filter((item: any) => item.question === 4);
    if (complementsItem[0]) {
      extras = {
        ...extras,
        complements: complementsItem.map((complement: any) => ({
          type: complement.product,
          price: complement.price,
          quantity: complement.count,
        })),
      };
    }

    const extraSauces = baseList.filter((item: any) => item.question === 6);
    if (extraSauces[0]) {
      extras = {
        ...extras,
        extra_sauces: extraSauces.map((complement: any) => ({
          type: complement.product,
          price: complement.price,
          quantity: complement.count,
        })),
      };
    }

    accumulateList = { ...hamburguerOrder, extras };
  };

  useEffect(() => {console.log(accumulateList);}, [accumulateList]);
  const showData = (orderList: any) => {
    if (orderList) {
      console.log(orderList);
    }
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
        setBaseList,
        baseList,
        handleOrderClick,
        setGeneralCounter,
        generalCounter,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingProvider };

export default ShoppingContext;
