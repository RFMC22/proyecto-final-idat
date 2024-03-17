import { createBrowserRouter } from "react-router-dom";
import { PathConstants } from "../utils/PathConstants";
import { Cupones, Error404, Home, Promociones, Root } from "../pages";

export const router = createBrowserRouter([
  {
    path: PathConstants.INDEX,
    element: <Root/>,
    errorElement: <Error404/>,
    children: [
      { path: PathConstants.INDEX, element: <Home/> },
      { path: PathConstants.PROMOCIONES, element: <Promociones/> },
      { path: PathConstants.CUPONES, element: <Cupones/> }
    ]
  }
])