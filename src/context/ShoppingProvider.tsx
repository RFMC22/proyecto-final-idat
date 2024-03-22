import { createContext, useState } from 'react';
import {  ComplementoResponse, 
          CuponResponse, 
          PromocionCompartirResponse, 
          PromocionDosResponse, 
          PromocionPersonalResponse, 
          ShoppingProviderProps } from '../interfaces';
import { getComplementos, getPromosCompartir, getPromosDos, getPromosPersonales } from '../services';
import { iShoppingContext, iShoppingType } from '../interfaces/IShopping';
import { getCupones } from '../services/fetchCupones';

const ShoppingContext = createContext<iShoppingType>(iShoppingContext);

const ShoppingProvider = ({ children } : ShoppingProviderProps) => {
  const [cartState, setCartState] = useState<boolean | null >(false);
  const [promosPersonales, setPromosPersonales] = useState<PromocionPersonalResponse>({});
  const [promosDos, setPromosDos] = useState<PromocionDosResponse>({});
  const [promosCompartir, setPromosCompartir] = useState<PromocionCompartirResponse>({});
  const [complementos, setComplementos] = useState<ComplementoResponse>({});
  const [cupones, setCupones] = useState<CuponResponse>({});

  const getDataPromociones = async () => {
    const [ promos, 
            promosD, 
            promosC, 
            complements,
            cupons
          ] = 
    await Promise.all([
            getPromosPersonales(),
            getPromosDos(),
            getPromosCompartir(),
            getComplementos(),
            getCupones()
    ]);
    
    setPromosPersonales(promos);
    setPromosDos(promosD)
    setPromosCompartir(promosC)
    setComplementos(complements);
    setCupones(cupons)
  }

  return (
    <ShoppingContext.Provider value={{ 
      cartState, 
      setCartState,
      getDataPromociones,
      promosPersonales,
      promosDos,
      promosCompartir,
      complementos,
      cupones
      }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingProvider };

export default ShoppingContext;
