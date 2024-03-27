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
  complementos: ComplementoResponse;
  cupones: CuponResponse;
  handleOrderClick: (id: string, price: number, product: string,count:number) => void;
  getDataPromociones: () => Promise<void>;
  getPolloData: () => Promise<void>;
  polloQuestions: PolloResponse;
  orderInfo: {
    name: string;
    description: string;
    mainImg: string;
    secondImg: string;
    price: number;
  };
  orderList: OrderItem[];

  setOrderInfo: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
      mainImg: string;
      secondImg: string;
      price: number;
    }>
  >;
  setOrderList: Dispatch<SetStateAction<OrderItem[]>>;
};

export const iShoppingContext = {
  cartState: false,
  setCartState: () => {},
  promosPersonales: {},
  promosDos: {},
  promosCompartir: {},
  complementos: {},
  cupones: {},
  polloQuestions: {},
  getDataPromociones: async () => {},
  getPolloData: async () => {},
  handleOrderClick: () => {},
  setOrderItem: () => [{}],
  orderInfo: {
    name: '',
    description: '',
    mainImg: '',
    secondImg: '',
    price: 0,
  },
  setOrderInfo: () => {},
  orderList: [],
  setOrderList: () => {},
};
