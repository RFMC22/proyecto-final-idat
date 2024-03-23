import { createContext, useState } from 'react';
import { iShoppingContext, iShoppingType } from '../interfaces/IShopping';

const ShoppingContext = createContext<iShoppingType>(iShoppingContext);

const ShoppingProvider = ({ children }: any) => {
  const [cartState, setCartState] = useState<boolean | null>(false);

  // VARIABLES PARA PEDIDOS

  const [orderTitle, setOrderTitle] = useState<string>('');
  const [orderDescripcion, setOrderDescripcion] = useState<string | null>('');
  const [orderMainImage, setOrderMainImage] = useState<string>('');
  const [orderSecondImage, setOrderSecondImage] = useState<string>('');
  const [orderBigPrice, setOrderBigPrice] = useState<number>(0);

  return (
    <ShoppingContext.Provider
      value={{
        cartState,
        setCartState,
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
