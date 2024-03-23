import React from 'react';
import {
  ComplementoResponse,
  CuponResponse,
  PromocionCompartirResponse,
  PromocionDosResponse,
  PromocionPersonalResponse,
} from '.';

export interface cartStateProps {}

export type iShoppingType = {
  cartState: boolean | null;
  setCartState: React.Dispatch<React.SetStateAction<boolean | null>>;
  setOrderTitle: React.Dispatch<React.SetStateAction<string>>;
  setOrderDescripcion: React.Dispatch<React.SetStateAction<string | null>>;
  setOrderMainImage: React.Dispatch<React.SetStateAction<string | ''>>;
  orderTitle: string;
  orderDescripcion: string | null;
  orderMainImage: string;
  setOrderSecondImage: React.Dispatch<React.SetStateAction<string | ''>>;
  setOrderBigPrice: React.Dispatch<React.SetStateAction<number>>;
  orderSecondImage: string;
  orderBigPrice: number;
  promosPersonales: PromocionPersonalResponse;
  promosDos: PromocionDosResponse;
  promosCompartir: PromocionCompartirResponse;
  complementos: ComplementoResponse;
  cupones: CuponResponse;
  getDataPromociones: () => Promise<void>;
};

export const iShoppingContext = {
  cartState: false,
  setCartState: () => {},
  setOrderTitle: () => {},
  setOrderDescripcion: () => {},
  setOrderMainImage: () => {},
  orderTitle: '',
  orderDescripcion: '',
  orderMainImage: '',
  setOrderSecondImage: () => {},
  setOrderBigPrice: () => {},
  orderSecondImage: '',
  orderBigPrice: 0,
  promosPersonales: {},
  promosDos: {},
  promosCompartir: {},
  complementos: {},
  cupones: {},
  getDataPromociones: async () => {},
};
