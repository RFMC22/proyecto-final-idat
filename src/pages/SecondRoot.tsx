import { Outlet } from 'react-router-dom';
import { Cart, Footer, Header } from '../components';

const SecondRoot = () => {
  return (
    <>
      <Cart />
      <Outlet />
    </>
  );
};

export default SecondRoot;
