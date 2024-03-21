import { createContext, useState } from 'react';
import { iShoppingContext, iShoppingType } from '../interfaces/IShopping';

const ShoppingContext = createContext<iShoppingType>(iShoppingContext);

const ShoppingProvider = ({ children }: any) => {
  const [cartState, setCartState] = useState<boolean | null >(false);

  return (
    <ShoppingContext.Provider value={{ cartState, setCartState }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingProvider };

export default ShoppingContext;
