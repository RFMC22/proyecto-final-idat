import React from 'react';
import {  ComplementoResponse, 
          CuponResponse, 
          PromocionCompartirResponse, 
          PromocionDosResponse, 
          PromocionPersonalResponse  } from '.';

export interface cartStateProps {}

export type iShoppingType = {
  cartState: boolean | null;
  setCartState: React.Dispatch<React.SetStateAction<boolean | null>>;
  promosPersonales: PromocionPersonalResponse;
  promosDos: PromocionDosResponse,
  promosCompartir: PromocionCompartirResponse,
  complementos: ComplementoResponse;
  cupones: CuponResponse;
  getDataPromociones: () => Promise<void>;
};

export const iShoppingContext = {
  cartState: false,
  setCartState: () => {},
  promosPersonales: {},
  promosDos: {},
  promosCompartir: {},
  complementos: {},
  cupones: {},
  getDataPromociones: async () => {},
};
