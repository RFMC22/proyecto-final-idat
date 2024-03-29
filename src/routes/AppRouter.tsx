import { Routes, Route, useLocation } from "react-router-dom"
import { 
  Beneficios, Combos, Cupones, 
  Error404, Home, Menu, Orders, 
  Product, 
  Promociones, Root, Tiendas } from "../pages"
import { Cart } from "../components"
import { PathConstants } from "../utils"
import Checkout from "../pages/Checkout"

const AppRouter = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Routes location={background || location}>
        <Route
          path={PathConstants.INDEX}
          element={<Root />}
          errorElement={<Error404 />}
        >
          <Route index element={<Home />}></Route>
          <Route path={PathConstants.MENU_TYPE} element={<Combos />}></Route>
          <Route path={PathConstants.MENU} element={<Menu />}></Route>
          <Route
            path={PathConstants.PROMOCIONES_DELIVERY}
            element={<Promociones />}
          ></Route>
          <Route path={PathConstants.CUPONES} element={<Cupones />}></Route>
          {/* <Route
            path={PathConstants.COMBOS_ORDERS}
            element={<Orders />}
          ></Route> */}
          <Route
            path={PathConstants.MENU_TYPE_ORDERS}
            element={<Orders />}
          ></Route>
          <Route
            path={PathConstants.PROMOCIONES_ID}
            element={<Tiendas />}
          ></Route>
          <Route
            path={PathConstants.BENEFICIOS}
            element={<Beneficios />}
          ></Route>
          <Route path={PathConstants.CART} element={<Cart />}></Route>
          <Route
          path={PathConstants.ADMIN_PRODUCT}
          element={<Product/>}
          ></Route>
          <Route
            path={PathConstants.CHECKOUT}
            element={<Checkout />}
          ></Route>
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path={PathConstants.CART} element={<Cart />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
