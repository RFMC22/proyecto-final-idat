import { Outlet } from 'react-router-dom';
<<<<<<< HEAD
import { Cart, Footer, Header } from '../components';
import { Root } from '.';
import useShopping from '../hooks/useShopping';
import { ShoppingProvider } from '../context/ShoppingProvider';
=======
import { Footer, Header } from '../components';
>>>>>>> cbcb258f0716a0c4efdf66b9a80a1301223fb798

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
