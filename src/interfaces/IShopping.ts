import React from 'react';

export interface cartStateProps {}

export type iShoppingType = {
  cartState: boolean | null;
  setCartState: React.Dispatch<React.SetStateAction<boolean | null>>;
  previousOutlet:JSX.Element | null;
  setPreviousOutlet:React.Dispatch<React.SetStateAction<JSX.Element | null>>;
};

export const iShoppingContext = {
  cartState: false,
  setCartState: () => {},
  previousOutlet: null,
  setPreviousOutlet: ()=>{},
};
