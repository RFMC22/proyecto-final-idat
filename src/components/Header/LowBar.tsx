import { GoHeart } from 'react-icons/go';
import { BsCart2 } from 'react-icons/bs';
import { lowbarMenu, lowbarAccount } from '../../assets/images';
import './../../styles/LowBar.css';
import { Link, useLocation } from 'react-router-dom';
import { PathConstants } from '../../utils';
import useShopping from '../../hooks/useShopping';

const LowBar = ({ display }: { display: string }) => {
  const location = useLocation();
  const { setCartState } = useShopping();

  const handleClick = () => {
    setCartState(true);
  };
  // console.log(location);
  return (
    <>
      <nav className={`lowBar ${display} container-m`}>
        <ul className="lowBar-list">
          <li className="lowBar-item">
            <Link to={PathConstants.MENU}>
              <img src={lowbarMenu} alt="lowbar Menu" className="lowBar-icon" />
              <p className="lowBar-text">MENU</p>
            </Link>
          </li>
          <li className="lowBar-item">
            <Link to={PathConstants.INDEX}>
              <GoHeart className="lowBar-icon" />
              <p className="lowBar-text">FAVORITOS</p>
            </Link>
          </li>

          <li className="lowBar-item" onClick={handleClick}>
            <Link to={PathConstants.CART} state={{ background: location }}>
              <BsCart2 className="lowBar-icon" />
              <p className="lowBar-text">CARRITO</p>
            </Link>
          </li>
          <li className="lowBar-item">
            <Link to={PathConstants.INDEX}>
              <img
                src={lowbarAccount}
                alt="lowBar Account"
                className="lowBar-icon"
              />
              <p className="lowBar-text">MI CUENTA</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LowBar;
