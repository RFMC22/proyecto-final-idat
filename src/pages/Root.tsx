import { Outlet } from 'react-router-dom';
import { Cart, Footer, Header } from '../components';
import { ShoppingProvider } from '../context/ShoppingProvider';

const Root = () => {
  return (
    <>
      <ShoppingProvider>
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
