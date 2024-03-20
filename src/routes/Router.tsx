import { createBrowserRouter } from 'react-router-dom';
import { PathConstants } from '../utils/PathConstants';
import { Cupones, Error404, Home, Promociones, Root, Menu, Combos } from '../pages';

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
      { path: PathConstants.COMBOS, element: <Combos /> },
    ],
  },
]);
