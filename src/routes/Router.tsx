import { createBrowserRouter } from 'react-router-dom';
import { PathConstants } from '../utils/PathConstants';
import { Cupones, Error404, Home, Promociones, Root, Menu } from '../pages';

export const router = createBrowserRouter([
  {
    path: PathConstants.INDEX,
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      { path: PathConstants.INDEX, element: <Home /> },
      { path: PathConstants.MENU, element: <Menu /> },
      { path: PathConstants.PROMOCIONES, element: <Promociones /> },
      { path: PathConstants.CUPONES, element: <Cupones /> },
      // { path: PathConstants.COMBOS, element: <Combos /> },
      // { path: PathConstants.HAMBURGUESAS, element: <Cupones /> },
      // { path: PathConstants.POLLO, element: <Cupones /> },
      // { path: PathConstants.MENUSALPLATO, element: <Cupones /> },
      // { path: PathConstants.LONCHERITAS, element: <Cupones /> },
      // { path: PathConstants.COMPLEMENTOS, element: <Cupones /> },
      // { path: PathConstants.BEBIDAS, element: <Cupones /> },
      // { path: PathConstants.HELADOS, element: <Cupones /> },
      // { path: PathConstants.INKACHIPS, element: <Cupones /> },
    ],
  },
]);
