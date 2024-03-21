import YellowBtn from '../shared/YellowBtn';
import './../../styles/NavBarDesktop.css';
import iconStore from './../../assets/images/icon-store.svg';
import iconCart from './../../assets/images/icon-cart.svg';
import { Link } from 'react-router-dom';
import { PathConstants } from '../../utils/PathConstants';
import { tabScrollClick } from '../../utils/GeneralFunctions';
import useShopping from '../../hooks/useShopping';
import { Cart } from '..';

const NavBarDesktop = () => {

  const handleTabClick = (id:string) => {
    tabScrollClick(id);
  };

  const { cartState, setCartState } = useShopping();
  const handleClick = (e: any) => {
    cartState
      ? (setCartState(false), console.log(cartState))
      : (setCartState(true), console.log(cartState));
  };
  return (
    <div className="NavBarDesktop ">
      <div className="container">
        <div className="flex flex-between gap-20">
          <ul className="flex-5 width-70">
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="26"
                viewBox="0 0 33 26"
                fill="none"
              >
                <path
                  d="M23.0429 6.70325C21.2524 2.6813 16.6983 0 11.6382 0C6.61706 0 2.02404 2.6813 0.233543 6.70325L0 7.24789H23.3543L23.0429 6.70325ZM6.50029 5.44639C6.1889 5.44639 5.95535 5.19502 5.95535 4.85986C5.95535 4.5247 6.1889 4.27332 6.50029 4.27332C6.81168 4.27332 7.04522 4.5247 7.04522 4.85986C7.04522 5.19502 6.81168 5.44639 6.50029 5.44639ZM8.21294 3.68679C7.90155 3.68679 7.668 3.43542 7.668 3.10026C7.668 2.76509 7.90155 2.51372 8.21294 2.51372C8.52433 2.51372 8.75787 2.76509 8.75787 3.10026C8.75787 3.43542 8.52433 3.68679 8.21294 3.68679ZM9.96451 5.44639C9.65312 5.44639 9.41958 5.19502 9.41958 4.85986C9.41958 4.5247 9.65312 4.27332 9.96451 4.27332C10.2759 4.27332 10.5094 4.5247 10.5094 4.85986C10.4705 5.19502 10.237 5.44639 9.96451 5.44639ZM11.6772 3.68679C11.3658 3.68679 11.1322 3.43542 11.1322 3.10026C11.1322 2.76509 11.3658 2.51372 11.6772 2.51372C11.9886 2.51372 12.2221 2.76509 12.2221 3.10026C12.2221 3.43542 11.9886 3.68679 11.6772 3.68679ZM13.3898 5.44639C13.0784 5.44639 12.8449 5.19502 12.8449 4.85986C12.8449 4.5247 13.0784 4.27332 13.3898 4.27332C13.7012 4.27332 13.9347 4.5247 13.9347 4.85986C13.9347 5.19502 13.7012 5.44639 13.3898 5.44639ZM15.1414 3.68679C14.83 3.68679 14.5965 3.43542 14.5965 3.10026C14.5965 2.76509 14.83 2.51372 15.1414 2.51372C15.4528 2.51372 15.6863 2.76509 15.6863 3.10026C15.6474 3.43542 15.4139 3.68679 15.1414 3.68679ZM16.6594 5.44639C16.348 5.44639 16.1145 5.19502 16.1145 4.85986C16.1145 4.5247 16.348 4.27332 16.6594 4.27332C16.9708 4.27332 17.2044 4.5247 17.2044 4.85986C17.2044 5.19502 16.9708 5.44639 16.6594 5.44639Z"
                  fill="#F9A213"
                />
                <path
                  d="M23.1208 10.371H0.233521V8.11477L0.350292 7.99602C0.895227 7.52102 1.9851 7.52102 2.53003 7.99602C2.8025 8.23352 3.50313 8.23352 3.7756 7.99602C4.32053 7.52102 5.4104 7.52102 5.95533 7.99602C6.2278 8.23352 6.92843 8.23352 7.2009 7.99602C7.74583 7.52102 8.8357 7.52102 9.38064 7.99602C9.65311 8.23352 10.3537 8.23352 10.6262 7.99602C11.1711 7.52102 12.261 7.52102 12.8059 7.99602C13.0784 8.23352 13.779 8.23352 14.0515 7.99602C14.5964 7.52102 15.6863 7.52102 16.2312 7.99602C16.5037 8.23352 17.2043 8.23352 17.4768 7.99602C18.0217 7.52102 19.1116 7.52102 19.6565 7.99602C19.929 8.23352 20.6296 8.23352 20.9021 7.99602C21.4471 7.52102 22.5369 7.52102 23.0819 7.99602L23.1986 8.11477V10.371H23.1208Z"
                  fill="#6DCC82"
                />
                <path
                  d="M23.1208 13.1814H0.233521V10.9647H23.1597L23.1208 13.1814Z"
                  fill="#FF4A45"
                />
                <path
                  d="M20.3183 23.3544H3.03608C1.59589 23.3544 0.389252 22.1273 0.389252 20.6232V19.3169H22.9651V20.6232C22.9651 22.1669 21.7974 23.3544 20.3183 23.3544Z"
                  fill="#F9A213"
                />
                <path
                  d="M20.9793 13.6905H2.37502C1.06876 13.6905 0 14.7777 0 16.1065C0 17.4352 1.06876 18.5224 2.37502 18.5224H20.9793C22.2856 18.5224 23.3147 17.4352 23.3543 16.1065C23.3543 14.7777 22.2856 13.6905 20.9793 13.6905ZM3.91878 17.9587H3.28544V14.1737H3.91878V17.9587ZM4.98753 17.9587H4.3542V14.1737H4.98753V17.9587ZM11.5188 17.9587H10.8855V14.1737H11.5188V17.9587ZM12.548 17.9587H11.9147V14.1737H12.548V17.9587ZM19.0001 17.9587H18.3668V14.1737H19.0001V17.9587ZM20.0689 17.9587H19.4355V14.1737H20.0689V17.9587Z"
                  fill="#B44031"
                />
                <path
                  d="M30.8678 10.6835H32.5852V14.3821H30.8678V10.6835Z"
                  fill="#F4B83F"
                />
                <path
                  d="M21.973 10.7345H23.6905V14.5607H21.973V10.7345Z"
                  fill="#F4B83F"
                />
                <path
                  d="M28.6633 10.0458H30.3808V16.0656L30.3295 16.1166C30.3295 16.1166 30.1757 16.3717 29.9194 16.6268C29.5861 16.9839 29.2529 17.2135 28.9453 17.3155L28.6377 17.4175L28.6633 10.0458Z"
                  fill="#F4B83F"
                />
                <path
                  d="M26.6126 17.6727L26.4332 17.6216V9H28.1506V17.5706L27.9968 17.6216C27.9968 17.6216 27.6636 17.7492 27.2278 17.7492C27.0228 17.7492 26.7921 17.7237 26.6126 17.6727Z"
                  fill="#F4B83F"
                />
                <path
                  d="M25.5873 17.443C25.5617 17.4175 24.7158 17.0859 24.2031 16.2187L24.1775 16.1677V10.0458H25.8949V17.5706L25.5873 17.443Z"
                  fill="#F4B83F"
                />
                <path
                  d="M22.9144 24.0813L22.9147 24.0813L22.9129 24.0677L21.7714 15.4739H23.0487C23.6263 17.3004 25.3062 18.5348 27.2278 18.5348C29.1494 18.5348 30.8294 17.3004 31.407 15.4739H32.6785L31.364 24.0628L31.3611 24.0816V24.1006C31.3611 24.3375 31.2614 24.5806 31.0759 24.7651C30.8905 24.9497 30.6456 25.0495 30.4064 25.0495H23.8442C23.6107 25.0495 23.3901 24.9541 23.2003 24.7651C23.0221 24.5878 22.9366 24.3692 22.9144 24.0813Z"
                  fill="#011689"
                  stroke="#011689"
                  stroke-width="0.5"
                />
                <circle cx="27.2278" cy="21.4971" r="2.3643" fill="white" />
                <path
                  d="M28.1376 21.5743C28.1376 21.3536 28.0125 21.2274 27.7936 21.2117C27.8874 21.2274 28.1532 21.0382 28.1376 20.6913C28.1219 20.4075 27.8874 20.2656 27.4497 20.3129L26.8868 20.3602L26.4334 22.5047L27.2308 22.4416C27.6685 22.4101 27.95 22.1263 28.0594 21.9055C28.075 21.9055 28.1376 21.7793 28.1376 21.5743ZM27.4966 21.7478C27.4809 21.8266 27.4184 21.9528 27.2464 21.9686L27.1057 21.9843L27.1839 21.5901L27.309 21.5743C27.3871 21.5743 27.5278 21.5901 27.4966 21.7478ZM27.6216 20.9278C27.5904 21.1013 27.434 21.1171 27.3559 21.1171L27.2621 21.1328L27.3402 20.7859L27.434 20.7701C27.5122 20.7701 27.6685 20.7544 27.6216 20.9278Z"
                  fill="#011689"
                />
                <path
                  d="M28.3252 22.82L26.9494 22.9462L26.9807 22.7254L28.3721 22.5992L28.3252 22.82Z"
                  fill="#F4B83F"
                />
                <path
                  d="M27.481 20.0132L26.2146 20.1236L26.2459 19.9186L27.5279 19.8082L27.481 20.0132Z"
                  fill="#E71D1D"
                />
              </svg>
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
              <Link to={PathConstants.COMBOS}>COMBOS</Link>
            </li>
            <li className="nav-menu-item">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                >
                  <path
                    d="M12.5296 0C12.7742 0 13.0188 0 13.2634 0C13.2914 0.0139777 13.3194 0.0419332 13.3543 0.0419332C14.0043 0.160744 14.5214 0.482232 14.9338 0.992419C15.2693 1.41874 15.6187 1.83108 15.9542 2.2574C16.2267 2.61384 16.5692 2.71867 16.9955 2.59287C17.5057 2.4461 18.0229 2.3203 18.5331 2.18053C20.1265 1.74023 21.6431 2.74662 21.8248 4.38202C21.8877 4.96908 21.9017 5.57013 21.9227 6.15719C21.9366 6.61147 22.1393 6.91199 22.5726 7.06574C23.0828 7.24745 23.586 7.44314 24.0892 7.64582C25.7106 8.28879 26.2767 10.057 25.3262 11.5316C25.0257 11.9929 24.7322 12.4542 24.4247 12.9154C24.201 13.2509 24.208 13.5794 24.4247 13.9148C24.7252 14.3691 25.0187 14.8234 25.3123 15.2777C26.2837 16.7873 25.7106 18.5484 24.0333 19.2054C23.5511 19.3941 23.0758 19.5828 22.5936 19.7505C22.1323 19.9113 21.9296 20.2188 21.9157 20.694C21.9017 21.1972 21.8807 21.7074 21.8458 22.2106C21.7409 24.0137 20.2174 25.104 18.4771 24.6288C17.9739 24.489 17.4638 24.3562 16.9606 24.2164C16.5552 24.1046 16.2267 24.2094 15.9612 24.5449C15.6117 24.9922 15.2553 25.4325 14.8919 25.8658C13.8295 27.1448 11.9565 27.1448 10.8942 25.8658C10.5378 25.4325 10.1814 24.9992 9.8389 24.5589C9.56634 24.2094 9.23087 24.0976 8.79756 24.2234C8.2105 24.3911 7.62343 24.5589 7.02938 24.6917C5.58967 25.0131 4.14298 23.9858 3.97525 22.5181C3.90536 21.9031 3.89138 21.2811 3.87041 20.6591C3.84945 20.2048 3.65376 19.9043 3.22045 19.7505C2.71026 19.5688 2.20706 19.3661 1.70386 19.1705C0.110404 18.5624 -0.48365 16.7663 0.431891 15.3266C0.732413 14.8583 1.03992 14.3901 1.34743 13.9218C1.57807 13.5724 1.57807 13.2229 1.34743 12.8735C1.02595 12.3913 0.711446 11.916 0.403936 11.4268C-0.469672 10.022 0.13137 8.23288 1.67591 7.63883C2.17911 7.44314 2.68231 7.24046 3.19249 7.06574C3.64677 6.905 3.85644 6.5905 3.87041 6.12225C3.88439 5.61905 3.91235 5.10886 3.9403 4.60566C4.03815 2.81651 5.55473 1.71926 7.28098 2.18053C7.78418 2.31331 8.29436 2.4461 8.79756 2.58588C9.22388 2.71168 9.56634 2.59986 9.8389 2.25041C10.1883 1.80313 10.5518 1.36283 10.9082 0.92253C11.1808 0.587065 11.5232 0.328477 11.9286 0.174722C12.1243 0.111822 12.3269 0.0628998 12.5296 0ZM17.5756 9.55378C17.4847 9.36508 17.4218 9.14843 17.289 8.98768C16.9536 8.58233 16.3875 8.60329 15.9751 9.00865C14.9827 10.0011 13.9903 10.9935 12.9909 11.9859C11.3136 13.6632 9.62924 15.3406 7.9589 17.0319C7.79117 17.1996 7.66537 17.4442 7.60946 17.6748C7.53258 18.0243 7.76321 18.3737 8.0847 18.5275C8.42017 18.6952 8.81154 18.6323 9.09808 18.3458C9.65719 17.7937 10.2093 17.2345 10.7684 16.6824C12.9 14.5508 15.0246 12.4262 17.1562 10.2946C17.3659 10.0989 17.5267 9.88225 17.5756 9.55378ZM9.35667 8.70114C8.39221 8.70114 7.60247 9.4769 7.60247 10.4414C7.60247 11.4058 8.38522 12.1956 9.34968 12.2026C10.3072 12.2095 11.1039 11.4128 11.1109 10.4553C11.1109 9.49787 10.3211 8.70114 9.35667 8.70114ZM17.5197 16.8711C17.5197 15.8997 16.7369 15.1239 15.7725 15.1309C14.801 15.1379 14.0252 15.9136 14.0322 16.8851C14.0322 17.8566 14.815 18.6253 15.7864 18.6253C16.7509 18.6183 17.5197 17.8426 17.5197 16.8711Z"
                    fill="#011689"
                  />
                  <path
                    d="M17.9787 9.09459C17.934 9.45343 17.7554 9.6777 17.5395 9.90197C15.269 12.1746 12.9985 14.4547 10.7355 16.7274C10.1474 17.3179 9.55934 17.916 8.95636 18.5066C8.65115 18.8131 8.23428 18.8729 7.87696 18.701C7.53453 18.529 7.28887 18.1552 7.37076 17.7889C7.42287 17.5422 7.5643 17.2806 7.74296 17.1011C9.52212 15.292 11.3087 13.5053 13.1028 11.7036C14.1598 10.6421 15.2169 9.57304 16.274 8.51148C16.7132 8.07041 17.3087 8.05546 17.6735 8.48905C17.8149 8.661 17.8819 8.89275 17.9787 9.09459Z"
                    fill="#F4B83F"
                  />
                  <path
                    d="M9.402 8.17217C10.5193 8.17217 11.4491 9.10191 11.4409 10.2192C11.4328 11.3365 10.503 12.2663 9.38569 12.2581C8.26836 12.25 7.35492 11.3284 7.35492 10.2029C7.35492 9.07744 8.27651 8.16402 9.402 8.17217Z"
                    fill="#F4B83F"
                  />
                  <path
                    d="M15.9397 14.7099C17.057 14.7099 17.9868 15.6396 17.9786 16.7569C17.9705 17.8743 17.0407 18.804 15.9234 18.7958C14.806 18.7877 13.8926 17.8661 13.8926 16.7406C13.8926 15.6152 14.8142 14.7017 15.9397 14.7099Z"
                    fill="#F4B83F"
                  />
                </svg>
                <Link to={PathConstants.PROMOCIONES_DELIVERY}>PROMOCIONES</Link>
              </div>
              <ul className="hoversubs">
                <li>
                  <Link to={PathConstants.PROMOCIONES_DELIVERY} onClick={() => handleTabClick('item__personales')}>Promociones Personales</Link>
                </li>
                <li>
                  <Link to={PathConstants.PROMOCIONES_DELIVERY} onClick={() => handleTabClick('item__combo-para-2')}>Promociones para 2</Link>
                </li>
                <li>
                  <Link to={PathConstants.PROMOCIONES_DELIVERY} onClick={() => handleTabClick('item__para-compartir')}>Promociones para compartir</Link>
                </li>
                <li>
                  <Link to={PathConstants.CUPONES}>Cupones</Link>
                </li>
              </ul>
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
              >
                <path
                  d="M22.6934 6.60156C20.93 2.64062 16.445 0 11.4617 0C6.51667 0 1.99333 2.64062 0.23 6.60156L0 7.13794H23L22.6934 6.60156ZM6.40167 5.36377C6.09501 5.36377 5.865 5.11621 5.865 4.78613C5.865 4.45605 6.09501 4.20849 6.40167 4.20849C6.70834 4.20849 6.93834 4.45605 6.93834 4.78613C6.93834 5.11621 6.70834 5.36377 6.40167 5.36377ZM8.08834 3.63086C7.78167 3.63086 7.55167 3.3833 7.55167 3.05322C7.55167 2.72314 7.78167 2.47558 8.08834 2.47558C8.39501 2.47558 8.62501 2.72314 8.62501 3.05322C8.62501 3.3833 8.39501 3.63086 8.08834 3.63086ZM9.81334 5.36377C9.50667 5.36377 9.27667 5.11621 9.27667 4.78613C9.27667 4.45605 9.50667 4.20849 9.81334 4.20849C10.12 4.20849 10.35 4.45605 10.35 4.78613C10.3117 5.11621 10.0817 5.36377 9.81334 5.36377ZM11.5 3.63086C11.1933 3.63086 10.9633 3.3833 10.9633 3.05322C10.9633 2.72314 11.1933 2.47558 11.5 2.47558C11.8067 2.47558 12.0367 2.72314 12.0367 3.05322C12.0367 3.3833 11.8067 3.63086 11.5 3.63086ZM13.1867 5.36377C12.88 5.36377 12.65 5.11621 12.65 4.78613C12.65 4.45605 12.88 4.20849 13.1867 4.20849C13.4933 4.20849 13.7233 4.45605 13.7233 4.78613C13.7233 5.11621 13.4933 5.36377 13.1867 5.36377ZM14.9117 3.63086C14.605 3.63086 14.375 3.3833 14.375 3.05322C14.375 2.72314 14.605 2.47558 14.9117 2.47558C15.2183 2.47558 15.4483 2.72314 15.4483 3.05322C15.41 3.3833 15.18 3.63086 14.9117 3.63086ZM16.4067 5.36377C16.1 5.36377 15.87 5.11621 15.87 4.78613C15.87 4.45605 16.1 4.20849 16.4067 4.20849C16.7133 4.20849 16.9433 4.45605 16.9433 4.78613C16.9433 5.11621 16.7133 5.36377 16.4067 5.36377Z"
                  fill="#F9A213"
                />
                <path
                  d="M22.77 10.2137H0.22995V7.99166L0.34495 7.87471C0.881618 7.40692 1.95495 7.40692 2.49162 7.87471C2.75995 8.10861 3.44995 8.10861 3.71829 7.87471C4.25496 7.40692 5.32829 7.40692 5.86496 7.87471C6.13329 8.10861 6.82329 8.10861 7.09163 7.87471C7.62829 7.40692 8.70163 7.40692 9.2383 7.87471C9.50663 8.10861 10.1966 8.10861 10.465 7.87471C11.0016 7.40692 12.075 7.40692 12.6116 7.87471C12.88 8.10861 13.57 8.10861 13.8383 7.87471C14.375 7.40692 15.4483 7.40692 15.985 7.87471C16.2533 8.10861 16.9433 8.10861 17.2116 7.87471C17.7483 7.40692 18.8216 7.40692 19.3583 7.87471C19.6266 8.10861 20.3166 8.10861 20.585 7.87471C21.1216 7.40692 22.195 7.40692 22.7317 7.87471L22.8467 7.99166V10.2137H22.77Z"
                  fill="#6DCC82"
                />
                <path
                  d="M22.77 12.9815H0.22995V10.7984H22.8083L22.77 12.9815Z"
                  fill="#FF4A45"
                />
                <path
                  d="M20.0101 23.0001H2.99005C1.57171 23.0001 0.383377 21.7917 0.383377 20.3103V19.0239H22.6167V20.3103C22.6167 21.8306 21.4667 23.0001 20.0101 23.0001Z"
                  fill="#F9A213"
                />
                <path
                  d="M20.661 13.4828H2.33898C1.05254 13.4828 0 14.5535 0 15.8621C0 17.1707 1.05254 18.2414 2.33898 18.2414H20.661C21.9475 18.2414 22.961 17.1707 23 15.8621C23 14.5535 21.9475 13.4828 20.661 13.4828ZM3.85932 17.6862H3.2356V13.9587H3.85932V17.6862ZM4.91187 17.6862H4.28814V13.9587H4.91187V17.6862ZM11.3441 17.6862H10.7203V13.9587H11.3441V17.6862ZM12.3576 17.6862H11.7339V13.9587H12.3576V17.6862ZM18.7119 17.6862H18.0882V13.9587H18.7119V17.6862ZM19.7644 17.6862H19.1407V13.9587H19.7644V17.6862Z"
                  fill="#B44031"
                />
              </svg>
              HAMBURGUESAS
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="22"
                viewBox="0 0 25 22"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.2631 0H2.73938C1.23238 0 0 1.23238 0 2.73933V15.4032C0 16.9102 1.23238 18.144 2.73938 18.144H6.13728V20.9803C6.13728 21.4422 6.43239 21.8329 6.87508 21.9599C7.31912 22.0856 7.77545 21.9094 8.01862 21.5173L10.1131 18.144H21.2632C22.7702 18.144 24.0026 16.9102 24.0026 15.4032V2.73933C24.0025 1.23238 22.7701 0 21.2631 0Z"
                  fill="#FF4155"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.75755 4.65072C8.07464 3.33363 10.2292 3.33363 11.5463 4.65072L12.0013 5.10569L12.4576 4.65072C13.7747 3.33363 15.9279 3.33363 17.245 4.65072C18.562 5.96645 18.562 8.12101 17.245 9.4381L12.3442 14.3389C12.1556 14.5274 11.8482 14.5274 11.6597 14.3389L6.75755 9.4381C5.44182 8.12101 5.44182 5.9664 6.75755 4.65072Z"
                  fill="#F9F9F9"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.18601 15.4032V2.73933C2.18601 1.23233 3.41975 0 4.92675 0H2.73938C1.23238 0 0 1.23238 0 2.73933V15.4032C0 16.9102 1.23238 18.144 2.73938 18.144H4.92675C3.41975 18.144 2.18601 16.9102 2.18601 15.4032Z"
                  fill="#BB0011"
                />
              </svg>
              BENEFICIOS
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
          <Link to={PathConstants.CART}>
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
