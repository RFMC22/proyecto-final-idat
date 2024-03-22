import React from 'react';

export interface cartStateProps {}

export type iShoppingType = {
  cartState: boolean | null;
  setCartState: React.Dispatch<React.SetStateAction<boolean | null>>;

};

export const iShoppingContext = {
  cartState: false,
  setCartState: () => {},
  
};
