import { Outlet } from 'react-router-dom';
import { Cart, Footer, Header } from '../components';
import { Root } from '.';

const SecondRoot = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SecondRoot;
