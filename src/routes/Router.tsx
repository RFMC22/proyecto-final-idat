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
} from '../pages';
import { Cart } from '../components';
import SecondRoot from '../pages/SecondRoot';

export const router = createBrowserRouter([
  {
    path: PathConstants.INDEX,
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      { path: PathConstants.INDEX, element: <Home /> },
      { path: PathConstants.MENU, element: <Menu /> },
      {
        path: PathConstants.PROMOCIONES_DELIVERY,
        element: <Promociones />,
      },
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
      { path: PathConstants.CART, element: <Cart /> },
      { path: PathConstants.PROMOCIONES_ID, element: <Menu /> },
    ],
  },
]);
