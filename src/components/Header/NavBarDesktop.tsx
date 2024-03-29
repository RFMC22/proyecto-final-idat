import YellowBtn from '../shared/YellowBtn';
import './../../styles/NavBarDesktop.css';
import iconStore from './../../assets/images/icon-store.svg';
import iconCart from './../../assets/images/icon-cart.svg';
import { Link, useLocation } from 'react-router-dom';
import useShopping from '../../hooks/useShopping';
import { PathConstants, FoodTypes } from '../../utils';
import { tabScrollClick } from '../../utils/GeneralFunctions';
import {
  menuIcon,
  promocionesIcon,
  hamburguesasIcon,
  beneficiosIcon,
} from '../../assets/images';

const NavBarDesktop = () => {
  const location = useLocation();
  const handleTabClick = (id: string) => {
    tabScrollClick(id);
  };

  const { setCartState } = useShopping();
  const handleClick = () => {
    setCartState(true);
  };

  return (
    <div className="NavBarDesktop ">
      <div className="container">
        <div className="flex flex-between gap-20">
          <ul className="flex-5 width-70">
            <li className="flex">
              <img src={menuIcon} alt="menuIcon" className="item-icon" />
              <Link to={PathConstants.MENU}>MENU</Link>
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="37"
                viewBox="0 0 42 37"
                fill="none"
              >
                <path
                  d="M38.0127 9.99286L21.3849 22.9892L21.6819 24.8277L40.6257 9.99286H38.0127Z"
                  fill="#E71D1D"
                />
                <path
                  d="M41.0413 12.0216L21.9788 26.9198L22.2163 28.7583L40.685 14.3673L41.0413 12.0216Z"
                  fill="#E71D1D"
                />
                <path
                  d="M19.4846 9.99286L19.9003 12.9091L23.5822 9.99286H19.4846Z"
                  fill="#E71D1D"
                />
                <path
                  d="M39.4973 22.7356L23.2852 35.3516C23.5228 35.9856 23.9979 36.4928 24.5917 36.7463L39.0816 25.4617L39.4973 22.7356Z"
                  fill="#E71D1D"
                />
                <path
                  d="M32.1336 9.99286L20.7911 18.8684L21.088 20.8971L34.9841 9.99286H32.1336Z"
                  fill="#E71D1D"
                />
                <path
                  d="M26.6108 9.99286L20.1972 15.0012L20.4942 16.7129L29.105 9.99286H26.6108Z"
                  fill="#E71D1D"
                />
                <path
                  d="M40.3287 17.0299L22.5726 30.8504L22.9289 33.3229L39.8536 20.073L40.3287 17.0299Z"
                  fill="#E71D1D"
                />
                <path
                  d="M38.6659 28.1244L27.3234 36.9999H30.4708L38.2503 30.9772L38.6659 28.1244Z"
                  fill="#E71D1D"
                />
                <path
                  d="M33.4995 36.9999H35.2216C36.6468 36.9999 37.8346 35.732 37.7752 34.3372L37.8939 33.5765L33.4995 36.9999Z"
                  fill="#E71D1D"
                />
                <path
                  d="M40.361 5.28577L42 9.51434H18L19.6976 5.28577H40.361Z"
                  fill="#27348B"
                />
                <path
                  d="M31 2.96667C31 2.69052 31.2239 2.46667 31.5 2.46667H33V0H30.7562C30.2735 0 29.8121 0.198671 29.4804 0.549328C29.1719 0.87543 29 1.30728 29 1.75616V5.28572H31V2.96667Z"
                  fill="#A5A5A5"
                />
                <path
                  d="M37 23.7857C37 27.5807 34.0899 30.6572 30.5 30.6572C26.9101 30.6572 24 27.5807 24 23.7857C24 19.9907 26.9101 16.9143 30.5 16.9143C34.0899 16.9143 37 19.9907 37 23.7857Z"
                  fill="#011689"
                />
                <path
                  d="M0.956177 8.40533H4.32793V15.9171H0.956177V8.40533Z"
                  fill="#F4B83F"
                />
                <path
                  d="M14.0909 7.05322H17.4627V18.8717L17.362 18.9718C17.362 18.9718 17.0601 19.4726 16.5568 19.9734C15.9026 20.6745 15.2484 21.1252 14.6445 21.3255L14.0406 21.5258L14.0909 7.05322Z"
                  fill="#F4B83F"
                />
                <path
                  d="M10.0649 22.0266L9.71265 21.9264V5H13.0844V21.8263L12.7825 21.9264C12.7825 21.9264 12.1282 22.1768 11.2727 22.1768C10.8701 22.1768 10.4172 22.1268 10.0649 22.0266Z"
                  fill="#F4B83F"
                />
                <path
                  d="M8.05198 21.5759C8.00165 21.5258 6.34094 20.8748 5.33444 19.1722L5.28412 19.072V7.05322H8.65587V21.8263L8.05198 21.5759Z"
                  fill="#F4B83F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.81239 34.5941L2.81345 34.6078C2.85701 35.1713 3.02427 35.5983 3.37217 35.9445C3.74336 36.3139 4.17413 36.5 4.62987 36.5H17.513C17.9802 36.5 18.4586 36.3052 18.821 35.9445C19.1834 35.5838 19.3782 35.109 19.3782 34.6463V34.6083L21.9631 17.7191H19.4842C18.3471 21.3052 15.0471 23.7285 11.2727 23.7285C7.49838 23.7285 4.19831 21.3052 3.0613 17.7191H0.570809L2.81239 34.5941ZM2.31494 34.6463C2.36526 35.2973 2.56656 35.8482 3.01948 36.2989C3.4724 36.7496 4.02597 37 4.62987 37H17.513C18.1169 37 18.7208 36.7496 19.1737 36.2989C19.6266 35.8482 19.8782 35.2473 19.8782 34.6463L22.5455 17.2191H19.1234L19.0227 17.5196C17.9659 20.9249 14.8458 23.2285 11.2727 23.2285C7.69968 23.2285 4.57955 20.9249 3.52273 17.5196L3.42208 17.2191H0L2.31494 34.6463Z"
                  fill="#011689"
                />
                <path
                  d="M34.5 19.45C34.5 17.9293 34.2096 16.3816 33.2565 15.1965C30.5052 11.7758 25.4393 9.5 20.2025 9.5C14.9965 9.5 9.96188 12.1518 7.22533 15.6936C6.29555 16.8969 6 18.4386 6 19.9593V33.5C6 35.433 7.567 37 9.5 37H31C32.933 37 34.5 35.433 34.5 33.5L34.5 19.45Z"
                  fill="white"
                />
                <path
                  d="M7 31.1576V28.5492L7.135 28.4119C7.765 27.8627 9.025 27.8627 9.655 28.4119C9.97 28.6864 10.78 28.6864 11.095 28.4119C11.725 27.8627 12.985 27.8627 13.615 28.4119C13.93 28.6864 14.74 28.6864 15.055 28.4119C15.685 27.8627 16.945 27.8627 17.575 28.4119C17.89 28.6864 18.7 28.6864 19.015 28.4119C19.645 27.8627 20.905 27.8627 21.535 28.4119C21.85 28.6864 22.66 28.6864 22.975 28.4119C23.605 27.8627 24.865 27.8627 25.495 28.4119C25.81 28.6864 26.62 28.6864 26.935 28.4119C27.565 27.8627 28.825 27.8627 29.455 28.4119C29.77 28.6864 30.58 28.6864 30.895 28.4119C31.525 27.8627 32.785 27.8627 33.415 28.4119L33.55 28.5492V31.1576H7Z"
                  fill="#6DCC82"
                />
                <path
                  d="M33.46 27.5627H7V25H33.505L33.46 27.5627Z"
                  fill="#FF4A45"
                />
                <path
                  d="M30.4901 37.0001H10.5101C8.84507 37.0001 7.45007 35.5814 7.45007 33.8424V32.3323H33.5501V33.8424C33.5501 35.6272 32.2001 37.0001 30.4901 37.0001Z"
                  fill="#F9A213"
                />
                <path
                  d="M30.85 19H9.7C8.215 19 7 20.2356 7 21.7458C7 23.2559 8.215 24.4915 9.7 24.4915H30.85C32.335 24.4915 33.505 23.2559 33.55 21.7458C33.55 20.2356 32.335 19 30.85 19ZM11.455 23.8508H10.735V19.5492H11.455V23.8508ZM12.67 23.8508H11.95V19.5492H12.67V23.8508ZM20.095 23.8508H19.375V19.5492H20.095V23.8508ZM21.265 23.8508H20.545V19.5492H21.265V23.8508ZM28.6 23.8508H27.88V19.5492H28.6V23.8508ZM29.815 23.8508H29.095V19.5492H29.815V23.8508Z"
                  fill="#B44031"
                />
                <path
                  d="M33.64 17.322C31.57 12.9288 26.305 10 20.455 10C14.65 10 9.34 12.9288 7.27 17.322L7 17.917H34L33.64 17.322ZM14.515 15.9492C14.155 15.9492 13.885 15.6746 13.885 15.3085C13.885 14.9424 14.155 14.6678 14.515 14.6678C14.875 14.6678 15.145 14.9424 15.145 15.3085C15.145 15.6746 14.875 15.9492 14.515 15.9492ZM16.495 14.0271C16.135 14.0271 15.865 13.7525 15.865 13.3864C15.865 13.0203 16.135 12.7458 16.495 12.7458C16.855 12.7458 17.125 13.0203 17.125 13.3864C17.125 13.7525 16.855 14.0271 16.495 14.0271ZM18.52 15.9492C18.16 15.9492 17.89 15.6746 17.89 15.3085C17.89 14.9424 18.16 14.6678 18.52 14.6678C18.88 14.6678 19.15 14.9424 19.15 15.3085C19.105 15.6746 18.835 15.9492 18.52 15.9492ZM20.5 14.0271C20.14 14.0271 19.87 13.7525 19.87 13.3864C19.87 13.0203 20.14 12.7458 20.5 12.7458C20.86 12.7458 21.13 13.0203 21.13 13.3864C21.13 13.7525 20.86 14.0271 20.5 14.0271ZM22.48 15.9492C22.12 15.9492 21.85 15.6746 21.85 15.3085C21.85 14.9424 22.12 14.6678 22.48 14.6678C22.84 14.6678 23.11 14.9424 23.11 15.3085C23.11 15.6746 22.84 15.9492 22.48 15.9492ZM24.505 14.0271C24.145 14.0271 23.875 13.7525 23.875 13.3864C23.875 13.0203 24.145 12.7458 24.505 12.7458C24.865 12.7458 25.135 13.0203 25.135 13.3864C25.09 13.7525 24.82 14.0271 24.505 14.0271ZM26.26 15.9492C25.9 15.9492 25.63 15.6746 25.63 15.3085C25.63 14.9424 25.9 14.6678 26.26 14.6678C26.62 14.6678 26.89 14.9424 26.89 15.3085C26.89 15.6746 26.62 15.9492 26.26 15.9492Z"
                  fill="#F9A213"
                />
              </svg>
              <Link to={`${PathConstants.MENU}/${FoodTypes.COMBOS.path}`}>
                COMBOS
              </Link>
            </li>
            <li className="nav-menu-item">
              <div className="flex">
                <img
                  src={promocionesIcon}
                  alt="promocionesIcon"
                  className="item-icon"
                />
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
              <img
                src={hamburguesasIcon}
                alt="hamburguesasIcon"
                className="item-icon"
              />
              <Link to={`${PathConstants.MENU}/${FoodTypes.HAMBURGUESAS.path}`}>
                CUPONES
              </Link>
            </li>
            <li className="flex">
              <img
                src={beneficiosIcon}
                alt="beneficiosIcon"
                className="item-icon"
              />
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
          <Link to={PathConstants.CART} state={{ background: location }}>
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarDesktop;
