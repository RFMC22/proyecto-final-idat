import { Link } from 'react-router-dom';
import { PathConstants } from '../../utils/PathConstants';
import {
  menuIcon,
  combosIcon,
  promocionesIcon,
  hamburguesasIcon,
  beneficiosIcon,
} from '../../assets/images';
import { tabScrollClick } from '../../utils/GeneralFunctions';

import './../../styles/NavBarMobile.css';
const NavBarMobile = ({ display }: { display: string }) => {
  const handleTabClick = (id: string) => {
    tabScrollClick(id);
  };

  return (
    <ul className={`NavBarMobile ${display}`}>
      <div className="grid-5 ">
        <Link to={PathConstants.MENU}>
          <li className="flex-icon">
            <div className="menu-icon-container">
              <img src={menuIcon} alt="menuIcon" className="item-icon" />
            </div>
            MENU
          </li>
        </Link>
        <Link to={PathConstants.COMBOS}>
          <li className="flex-icon">
            <div className="menu-icon-container">
              <img src={combosIcon} alt="combosIcon" className="item-icon" />
            </div>
            COMBOS
          </li>
        </Link>
        <Link to={PathConstants.PROMOCIONES_DELIVERY}>
          <li className="nav-menu-item">
            <div className="flex-icon">
              <div className="menu-icon-container">
                <img
                  src={promocionesIcon}
                  alt="promocionesIcon"
                  className="item-icon"
                />
              </div>
              PROMOCIONES
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
        </Link>
        <Link to={PathConstants.HAMBURGUESAS}>
          <li className="flex-icon">
            <div className="menu-icon-container">
              <img
                src={hamburguesasIcon}
                alt="hamburguesasIcon"
                className="item-icon"
              />
            </div>
            CUPONES
          </li>
        </Link>
        <Link to={PathConstants.BENEFICIOS}>
          <li className="flex-icon">
            <div className="menu-icon-container">
              <img
                src={beneficiosIcon}
                alt="beneficiosIcon"
                className="item-icon"
              />
            </div>
            BENEFICIOS
          </li>
        </Link>
      </div>
    </ul>
  );
};

export default NavBarMobile;
