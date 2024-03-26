import { Link, Outlet, useLocation } from 'react-router-dom';
import { Cart, Footer, Header } from '../components';
import { ShoppingProvider } from '../context/ShoppingProvider';
import { PathConstants } from '../utils';

const Root = () => {
  const location = useLocation();
  return (
    <>
      <ShoppingProvider>
        <Link to={PathConstants.CART} state={{ background: location }}>carrito</Link>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <Cart/>
      </ShoppingProvider>
    </>
  );
};

export default Root;
