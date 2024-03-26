import YellowBtn from '../shared/YellowBtn';
import './../../styles/NavBarDesktop.css';
import iconStore from './../../assets/images/icon-store.svg';
import iconCart from './../../assets/images/icon-cart.svg';
import { Link } from 'react-router-dom';
import { PathConstants } from '../../utils/PathConstants';
import { tabScrollClick } from '../../utils/GeneralFunctions';
import useShopping from '../../hooks/useShopping';
import { useNavigate } from 'react-router-dom';
import { menuIcon, combosIcon, promocionesIcon, hamburguesasIcon, beneficiosIcon } from '../../assets/images';

const NavBarDesktop = () => {
  const handleTabClick = (id: string) => {
    tabScrollClick(id);
  };
  const navigate = useNavigate();

  const { setCartState } = useShopping();
  const handleClick = () => {
    setCartState(true);
    navigate(PathConstants.CART);
  };

  return (
    <div className="NavBarDesktop ">
      <div className="container">
        <div className="flex flex-between gap-20">
          <ul className="flex-5 width-70">
            <li className="flex">
              <img src={menuIcon} alt="menuIcon" className='item-icon' />
              <Link to={PathConstants.MENU}>MENU</Link>
            </li>
            <li className="flex">
              <img src={combosIcon} alt="combosIcon" className='item-icon' />
              <Link to={PathConstants.COMBOS}>COMBOS</Link>
            </li>
            <li className="nav-menu-item">
              <div className="flex">
                <img src={promocionesIcon} alt="promocionesIcon" className='item-icon' />
                <Link to={PathConstants.PROMOCIONES_DELIVERY}>PROMOCIONES</Link>
              </div>
              <ul className="hoversubs">
                <li>
                  <Link
                    to={PathConstants.PROMOCIONES_DELIVERY}
                    onClick={() => handleTabClick('item__personales')}
                  >
                    Promociones Personales
                  </Link>
                </li>
                <li>
                  <Link
                    to={PathConstants.PROMOCIONES_DELIVERY}
                    onClick={() => handleTabClick('item__combo-para-2')}
                  >
                    Promociones para 2
                  </Link>
                </li>
                <li>
                  <Link
                    to={PathConstants.PROMOCIONES_DELIVERY}
                    onClick={() => handleTabClick('item__para-compartir')}
                  >
                    Promociones para compartir
                  </Link>
                </li>
                <li>
                  <Link to={PathConstants.CUPONES}>Cupones</Link>
                </li>
              </ul>
            </li>
            <li className="flex">
              <img src={hamburguesasIcon} alt="hamburguesasIcon" className='item-icon' />
              <Link to={PathConstants.HAMBURGUESAS}>Cupones</Link>
            </li>
            <li className="flex">
              <img src={beneficiosIcon} alt="beneficiosIcon" className='item-icon' />
              <Link to={PathConstants.BENEFICIOS}>BENEFICIOS</Link>
            </li>
          </ul>

          <YellowBtn
            text={'Pide en tiendas'}
            redText={'SIN COLAS'}
            icon={iconStore}
            position="position-right"
            iconHeight="height-20"
            Circle="none"
            id=""
            handleClick=""
          />
          <YellowBtn
            text={''}
            redText={''}
            icon={iconCart}
            position=""
            iconHeight=""
            Circle="redCircle"
            id="cart"
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBarDesktop;
