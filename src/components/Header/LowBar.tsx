import { GoHeart } from 'react-icons/go';
import { BsCart2 } from 'react-icons/bs';
import { lowbarMenu, lowbarAccount } from '../../assets/images';
import './../../styles/LowBar.css';
import { Link } from 'react-router-dom';
import { PathConstants } from '../../utils';
const LowBar = ({ display }: { display: string }) => {
  return (
    <>
      <nav className={`lowBar ${display} container-m`}>
        <ul className="lowBar-list">
          <Link to={PathConstants.MENU}>
            <li className="lowBar-item">
              <img src={lowbarMenu} alt="lowbar Menu" className="lowBar-icon" />
              <p className="lowBar-text">ME NU</p>
            </li>
          </Link>
          <Link to={PathConstants.INDEX}>
            <li className="lowBar-item">
              <GoHeart className="lowBar-icon" />
              <p className="lowBar-text">FAVORITOS</p>
            </li>
          </Link>
          <Link to={PathConstants.CART}>
            <li className="lowBar-item">
              <BsCart2 className="lowBar-icon" />
              <p className="lowBar-text">CARRITO</p>
            </li>
          </Link>
          <Link to={PathConstants.INDEX}>
            <li className="lowBar-item">
              <img
                src={lowbarAccount}
                alt="lowBar Account"
                className="lowBar-icon"
              />
              <p className="lowBar-text">MI CUENTA</p>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default LowBar;
