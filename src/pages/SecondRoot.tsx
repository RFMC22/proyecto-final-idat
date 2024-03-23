import { Outlet } from 'react-router-dom';
import { Cart, Footer, Header } from '../components';

const SecondRoot = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Cart />
    </>
  );
};

export default SecondRoot;
