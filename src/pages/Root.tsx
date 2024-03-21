import { Outlet } from 'react-router-dom';
import { Cart, Footer, Header } from '../components';
import { ShoppingProvider } from '../context/ShoppingProvider';

const Root = () => {
  return (
    <>
      <ShoppingProvider>
        <Cart/>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ShoppingProvider>
    </>
  );
};

export default Root;
