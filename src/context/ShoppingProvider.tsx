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
  // let accumulateList = {};
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
  const [acumulateList, setAccumulateList] = useState({});
  const [saveLocalStorage, setSaveLocalStorage] = useState(false);
  const [shoppingList, setShoppingList] = useState({});
  // Functions for Fetching
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

  // Functions for the Shopping Cart
  const handleOrderClick = (
    id: any,
    price: number,
    text: string,
    count: any,
    question: number
  ) => {
    const checkBaseList = baseList.some((item) => item.id === id);
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
  };

  // When the baseList changes ran the OrderList
  useEffect(() => {
    // showData(baseList);
    orderTheList(baseList);
  }, [baseList]);

  // When the pathname changes see if the second element is combos or pollo
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
    setAccumulateList({ ...hamburguerOrder, extras });
    // accumulateList = { ...hamburguerOrder, extras };
  };

  useEffect(() => {
    if (saveLocalStorage === true) {
      sentLocalStorage(acumulateList);
      setSaveLocalStorage(false);
    }
  }, [acumulateList]);

  const sentLocalStorage = (acumulateList: any) => {
    localStorage.setItem(
      `order_${acumulateList.name}`,
      JSON.stringify(acumulateList)
    );
  };

  const getFromLocalStorage = () => {
    let allItems = [];
    let allItemsFiltered=[];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);

      // Check if the key represents an item you've saved
      // You can add additional checks here if needed
      // For example, you might want to filter keys that start with a specific prefix
      if (key.startsWith('order_')) {
        // Retrieve the value associated with the key
        let item = JSON.parse(localStorage.getItem(key));

        // Push the item to the array
        allItems.push(item);
      }

      allItemsFiltered = allItems.filter((item) => item.name.trim() !== '');
      setShoppingList(allItemsFiltered);
      
    }

    
  };

  useEffect(() => {
    getFromLocalStorage();
  }, []);

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
        setSaveLocalStorage,
        saveLocalStorage,
        getFromLocalStorage,
        shoppingList,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingProvider };

export default ShoppingContext;
