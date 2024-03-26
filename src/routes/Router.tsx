import { createBrowserRouter } from 'react-router-dom';
import { PathConstants } from '../utils/PathConstants';
import {
  Cupones,
  Error404,
  Home,
  Promociones,
  Root,
  Menu,
  Combos,
  Hamburguesas,
  Pollo,
  MenusAlPlato,
  Loncheritas,
  Complementos,
  Bebidas,
  Helados,
  InkaChips,
  Tiendas,
  Orders,
  Beneficios,
} from '../pages';
import { Cart } from '../components';

export const router = createBrowserRouter([
  {
    path: PathConstants.INDEX,
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      { path: PathConstants.INDEX, element: <Home /> },
      { path: PathConstants.MENU, element: <Menu /> },
      { path: PathConstants.PROMOCIONES_DELIVERY, element: <Promociones /> },
      { path: PathConstants.CUPONES, element: <Cupones /> },
      { path: PathConstants.COMBOS, element: <Combos /> },
      { path: PathConstants.HAMBURGUESAS, element: <Hamburguesas /> },
      { path: PathConstants.POLLO, element: <Pollo /> },
      { path: PathConstants.MENUSALPLATO, element: <MenusAlPlato /> },
      { path: PathConstants.LONCHERITAS, element: <Loncheritas /> },
      { path: PathConstants.COMPLEMENTOS, element: <Complementos /> },
      { path: PathConstants.BEBIDAS, element: <Bebidas /> },
      { path: PathConstants.HELADOS, element: <Helados /> },
      { path: PathConstants.INKACHIPS, element: <InkaChips /> },
      { path: PathConstants.COMBOS_ORDERS, element: <Orders /> },
      { path: PathConstants.CART, element: <Cart /> },
      { path: PathConstants.PROMOCIONES_ID, element: <Tiendas /> },
      { path: PathConstants.BENEFICIOS, element: <Beneficios /> },
    ],
  },
]);
