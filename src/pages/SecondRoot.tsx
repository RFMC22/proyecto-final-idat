import { Outlet } from 'react-router-dom';
import { Cart, Footer, Header } from '../components';
import { Root } from '.';
import useShopping from '../hooks/useShopping';
import { ShoppingProvider } from '../context/ShoppingProvider';

const SecondRoot = () => {
  const { previousOutlet } = useShopping();

  return (
    <>
      <ShoppingProvider>
        <Header />
        <main><Outlet/></main>
        <Footer />
        <Cart />
      </ShoppingProvider>
    </>
  );
};

export default SecondRoot;
