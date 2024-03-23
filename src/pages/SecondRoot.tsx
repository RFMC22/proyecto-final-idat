import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

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
