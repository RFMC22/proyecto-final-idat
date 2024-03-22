import { createContext, useState } from 'react';
import { iShoppingContext, iShoppingType } from '../interfaces/IShopping';

const ShoppingContext = createContext<iShoppingType>(iShoppingContext);

const ShoppingProvider = ({ children }: any) => {
  const [cartState, setCartState] = useState<boolean | null >(false);
  const [previousOutlet, setPreviousOutlet] = useState<JSX.Element | null>(null);
  return (
    <ShoppingContext.Provider value={{ cartState, setCartState,previousOutlet,setPreviousOutlet }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingProvider };

export default ShoppingContext;
