import React, { Dispatch, SetStateAction } from 'react';
import {
  ComplementoResponse,
  CuponResponse,
  PolloResponse,
  PromocionCompartirResponse,
  PromocionDosResponse,
  PromocionPersonalResponse,
} from '.';

export interface cartStateProps {}

export interface OrderItem {
  id: string;
  price: number;
  product: string;
}

export type iShoppingType = {
  cartState: boolean | null;
  setCartState: React.Dispatch<React.SetStateAction<boolean | null>>;
  promosPersonales: PromocionPersonalResponse;
  promosDos: PromocionDosResponse;
  promosCompartir: PromocionCompartirResponse;
  locales:any;
  complementos: ComplementoResponse;
  cupones: CuponResponse;
  handleOrderClick: (
    id: any,
    price: number,
    product: string,
    count: number,
    question: number
  ) => void;
  getDataPromociones: () => Promise<void>;
  getDataLocales: () => Promise<void>;
  getPolloData: () => Promise<void>;
  polloQuestions: PolloResponse;
  orderInfo: {
    name: string;
    description: string;
    mainImg: string;
    secondImg: string;
    price: number;
    bigSizePrice: number;
  };
  setSaveLocalStorage: any;
  getFromLocalStorage:any;
  baseList: OrderItem[];
  generalCounter: number;
  setGeneralCounter: React.Dispatch<React.SetStateAction<number>>;

  setOrderInfo: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
      mainImg: string;
      secondImg: string;
      price: number;
      bigSizePrice: number;
    }>
  >;
  setBaseList: Dispatch<SetStateAction<OrderItem[]>>;
  saveLocalStorage: boolean;
  shoppingList:any;
  selectLocal: any;
  setLocalStorage: any
  getLocalStorage:any;
};

export const iShoppingContext = {
  cartState: false,
  setCartState: () => {},
  promosPersonales: {},
  locales:{},
  promosDos: {},
  promosCompartir: {},
  complementos: {},
  cupones: {},
  polloQuestions: {},
  generalCounter: 1,
  setGeneralCounter: () => {},
  getDataPromociones: async () => {},
  getDataLocales: async () => {},
  getPolloData: async () => {},
  handleOrderClick: () => {},
  setOrderItem: () => [{}],
  orderInfo: {
    name: '',
    description: '',
    mainImg: '',
    secondImg: '',
    price: 0,
    bigSizePrice: 0,
  },
  setOrderInfo: () => {},
  baseList: [],
  setBaseList: () => {},
  setSaveLocalStorage: () => {},
  saveLocalStorage: false,
  getFromLocalStorage:()=>{},
  shoppingList:{},
  selectLocal: {},
  setLocalStorage: () => {},
  getLocalStorage: () => {}
};
