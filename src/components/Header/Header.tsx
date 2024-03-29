import { useState } from 'react';
import YellowBtn from '../shared/YellowBtn';
import '../../styles/Header.css';
import NavBar from './NavBar';
import NavBarDesktop from './NavBarDesktop';
import iconStore from './../../assets/images/icon-store.svg';
import { Link } from 'react-router-dom';
import { PathConstants } from '../../utils';

const Header = () => {
  const [openHamburguer, setOpenHamburguer] = useState<boolean>(false);

  const handleOpenHamburguer = () => {
    setOpenHamburguer(true);
  };
  return (
    <header className="Header">
      <div className="imgContainer">
        <img
          src="https://www.bembos.com.pe/_ipx/q_50,s_1110x57/https://d31npzejelj8v1.cloudfront.net/media/minibanner/1110x57.jpg"
          alt="Horario de atención"
        />
      </div>

      <div className="topBar">
        <div className="container-m grid">
          <Link to={PathConstants.INDEX}>
            <svg
              data-v-17182645=""
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="96.286"
              viewBox="0 0 276.667 96.286"
              className="icon__logo"
            >
              <path
                fill="#e10b19"
                d="M183.447.003a215.24 215.24 0 0 1-2.015 9.673c-3.019.03-53.142 4.638-60.622 5.156.431-3.207 1.325-6.329 1.924-9.506 6.058-.65 46.545-4.178 60.713-5.323z"
              ></path>
              <path
                // fill="#21388b"
                className="fill-blue"
                d="M252.247 14.994a25.2 25.2 0 0 1 16.133-5.3 57.374 57.374 0 0 1 8.287.272c-.635 3.93-1.585 7.808-2.379 11.711-.263 1.184-.487 2.382-.842 3.546a11.125 11.125 0 0 0-8.762-.974 6.111 6.111 0 0 0-4.191 4.4 3.741 3.741 0 0 0 .635 3.519c1.9 2.3 4.785 3.431 6.837 5.565a12.739 12.739 0 0 1 4.168 9.624 23.53 23.53 0 0 1-3.6 13.742c-3.144 4.75-8.446 7.656-13.9 8.922a36.487 36.487 0 0 1-16.58.171c1.086-4.9 2.058-9.821 3.138-14.722 2.844.473 5.848 1.131 8.674.218 2.585-.832 4.569-3.707 3.831-6.433-.911-2.262-3.134-3.545-4.92-5.045a29.681 29.681 0 0 1-4.266-4.23c-2.046 11.094-9.153 20.833-18.3 27.23a40.462 40.462 0 0 1-16.8 7.141c-5.875.966-12.2.224-17.306-2.984a19.922 19.922 0 0 1-8.378-10.968c-3.2 8.4-11.234 14.461-19.957 16.138-3.964.743-8.015.826-12.015 1.272-7.779.615-15.547 1.352-23.325 1.984-.921-7.463-1.928-14.915-2.808-22.384-3.569 3.97-12.659 15.092-13.8 16.544-.924-1.279-6.607-11.811-8.84-15.612-.1.016-7.682 16.447-11.242 24.674-8.032.8-41.809 3.792-50.665 4.4.717-3.918 1.762-7.782 2.311-11.729a27.107 27.107 0 0 1-15.123 12.086 33.81 33.81 0 0 1-8.667 1.589c-6.539.519-13.064 1.23-19.609 1.627 1.164-6.581 11.662-55.448 12.172-57.34 3.138-.322 6.288-.509 9.426-.831 5.2-.353 10.534-1.358 15.676.016 3.029.714 5.97 2.548 7.248 5.487 1.1 2.25.921 4.815.809 7.242-.672 4.633-3.664 9.064-8.127 10.769a10.578 10.578 0 0 1 6.2 3.155c1.456 1.618 1.94 3.806 2.321 5.884 2.552-11.755 4.954-23.546 7.535-35.3 10.66-.987 35.721-3.2 37.6-3.239-.892 5.045-2.194 10.014-3.071 15.059-.915.227-15.906 1.47-22.466 2.038a63.154 63.154 0 0 0-1.469 7.161c5.946-.5 11.883-1.148 17.835-1.549-.728 3.953-2.576 12.646-3.023 12.646-5.868.635-11.761 1-17.636 1.571-.412 2.359-1.012 4.683-1.4 7.048 7.39-.549 14.77-1.243 22.154-1.864.425-.017.513-.537.714-.823 4.837-11.106 9.751-22.177 14.566-33.291 1.45-3.118 2.711-6.321 4.213-9.412 3.747 6.809 12.009 21.8 12.432 22.469 6.637-7.818 20.724-25.3 21.631-25.676 2.131 13.728 4.443 27.432 6.61 41.154.207-.381 6.2-28.305 9.07-41.848 5.314-.493 10.637-.921 15.954-1.42 4.289-.272 8.88-.188 12.712 2a9.076 9.076 0 0 1 4.449 6.374 15.52 15.52 0 0 1-1.64 10.079 12.3 12.3 0 0 1-6.542 5.624 13.733 13.733 0 0 1 4.189 1.4 13.147 13.147 0 0 1 3.006 2.69c1.632-9.269 7.038-17.56 14.008-23.747a44.352 44.352 0 0 1 15.242-9.019 30.4 30.4 0 0 1 15.935-1.328 20.487 20.487 0 0 1 12.916 8.381 21.769 21.769 0 0 1 2.471 5.023 27.68 27.68 0 0 1 8.541-12.577zm-37.174 14.568a22.2 22.2 0 0 0-15.741 14.876 12.9 12.9 0 0 0 .556 9.37 9.8 9.8 0 0 0 6.71 5.1 15.981 15.981 0 0 0 10.65-1.869 24.35 24.35 0 0 0 8.123-7.217c2.4-3.423 3.984-7.673 3.338-11.895a9.889 9.889 0 0 0-6.6-8.093 13.009 13.009 0 0 0-7.036-.272zm-51.751 3.413c-.671 2.95-1.362 5.9-1.833 8.893 2.464-.078 5.168-.2 7.2-1.786a5.938 5.938 0 0 0 2.03-5.808 3.065 3.065 0 0 0-2.506-1.57 23.03 23.03 0 0 0-4.891.271zM24.397 45.115c-.513 3-1.341 5.927-1.851 8.924 2.128-.122 4.37-.175 6.3-1.19a6.28 6.28 0 0 0 3.141-5.193 2.586 2.586 0 0 0-2.072-2.71 19.159 19.159 0 0 0-5.518.169zm134.4 9.47c-.809 3.382-1.592 6.781-2.217 10.2 2.254-.233 4.661-.068 6.736-1.142a7.28 7.28 0 0 0 3.96-5.954 2.962 2.962 0 0 0-2.006-3.1c-2.105-.683-4.332-.107-6.477-.003zm-139 12.272c-.747 3.344-1.467 6.707-2.061 10.087a28.851 28.851 0 0 0 5.565-.7 6.917 6.917 0 0 0 4.835-8.012c-.862-1.727-3.071-1.934-4.782-1.812a18.011 18.011 0 0 0-3.565.438z"
              ></path>
              <path
                fill="#fbb905"
                d="M235.597 81.709a5.677 5.677 0 0 1-.313 2.642c-.576 2.226-.9 4.5-1.4 6.743-1.946.516-59.126 5.16-60.8 5.19.328-3.141 1.252-6.186 1.859-9.279 3.281-.475 57.489-5.359 60.654-5.296z"
              ></path>
            </svg>
          </Link>

          <div className="flex none-d">
            <YellowBtn
              text={'Pide en tiendas'}
              redText={'SIN COLAS'}
              icon={iconStore}
              position="responsive-topbarButton"
              iconHeight=""
              Circle="none"
              id='1'
              handleClick={''}
            />
          </div>

          <div className="flex flex-around">
            <div className="flex">
              <svg
                data-v-17182645=""
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="36"
                viewBox="0 0 68.79 68.794"
                className="phone fill-white"
              >
                <path
                  d="m674.718 596.213-8.3-8.3a6.878 6.878 0 0 0-9.718 0l-3.774 3.774a3.425 3.425 0 0 1-2.438 1.008 3.419 3.419 0 0 1-2.437-1.008l-16.36-16.373a3.445 3.445 0 0 1 0-4.876l3.774-3.774a6.882 6.882 0 0 0 0-9.721l-8.3-8.274a6.873 6.873 0 0 0-9.708-.009l-3.028 3a22.194 22.194 0 0 0 0 31.355l25.921 25.935a22.16 22.16 0 0 0 31.356 0l3.02-3.02a6.879 6.879 0 0 0-.008-9.717zm-53.762-42.705.667-.66a.949.949 0 0 1 .676-.279.958.958 0 0 1 .68.282l8.3 8.274a.959.959 0 0 1 0 1.354l-.677.677zm-2.356 25.326a16.17 16.17 0 0 1-1.693-21.007l9.6 9.6a9.378 9.378 0 0 0 .995 12.066l16.36 16.373a9.374 9.374 0 0 0 12.065.995l9.6 9.6a16.159 16.159 0 0 1-21.007-1.694zm52.213 22.238a.95.95 0 0 1-.28.677l-.677.676-9.657-9.657.677-.677a.959.959 0 0 1 1.354 0l8.3 8.3a.95.95 0 0 1 .286.681z"
                  transform="translate(-607.937 -546.654)"
                ></path>
              </svg>

              <div className="display-d none-m">
                <div className="flex-col">
                  <p className="textDelivery">
                    Delivery <span>LIMA</span>
                    <select name="data-location" id="idLocation"></select>
                  </p>
                  <p className="phoneNumber">014191919</p>
                </div>
              </div>
            </div>
            <div className="display-d none-m login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.559"
                height="22.776"
                style={{ fill: '#fbb905' }}
                className="login-icon"
              >
                <path
                  d="m1351.8 1585.9-4.555-1.7v-1.547a7.6 7.6 0 0 0 2.536-5.795c0-.19-.012-.376-.024-.563v-.1a.15.15 0 0 0 0-.015c-.3-3.64-2.929-6.5-6.127-6.5-3.037 0-5.561 2.581-6.061 5.96a1.021 1.021 0 0 0-.026.2 8.308 8.308 0 0 0-.07 1.022 7.526 7.526 0 0 0 2.828 6.03v1.309l-4.577 1.7a4.136 4.136 0 0 0-2.727 3.9v1.623a1.039 1.039 0 0 0 1.04 1.04h19.479a1.04 1.04 0 0 0 1.04-1.04v-1.623a4.148 4.148 0 0 0-2.756-3.901zm-8.176-14.143c1.84 0 3.4 1.534 3.9 3.632-.828.047-1.5-.278-2.217-1.535a1.055 1.055 0 0 0-.923-.524 1.041 1.041 0 0 0-.9.559 3.748 3.748 0 0 1-2.931 1.416 3.333 3.333 0 0 1-.787-.088 4.275 4.275 0 0 1 3.855-3.463zm-4.059 5.534a5.528 5.528 0 0 0 .989.094 6.364 6.364 0 0 0 3.764-1.338 3.884 3.884 0 0 0 3.052 1.427c.1 0 .2-.01.3-.016a5.288 5.288 0 0 1-2.029 3.825c-.027.017-.051.038-.076.058a3.43 3.43 0 0 1-1.941.616c-2.133-.003-3.885-2.057-4.062-4.669zm12.9 13.083h-17.4v-.583a2.056 2.056 0 0 1 1.358-1.941l5.268-1.955a1.04 1.04 0 0 0 .678-.975v-1.032a5.219 5.219 0 0 0 2.79-.088v1.12a1.039 1.039 0 0 0 .676.974l5.246 1.96a2.1 2.1 0 0 1 1.383 1.937z"
                  transform="translate(-1332.988 -1569.674)"
                />
              </svg>
              <span className="loginText">Ingresa o crear tu cuenta</span>
            </div>

            <svg
              data-v-17182645=""
              className="hamburguer none-d"
              xmlns="http://www.w3.org/2000/svg"
              width="67.348"
              height="52.412"
              viewBox="0 0 67.348 52.412"
              style={{ fill: 'rgb(33, 56, 139)' }}
              onClick={handleOpenHamburguer}
            >
              <path d="M63.121 8.453H4.227a4.226 4.226 0 1 1 0-8.453H63.12a4.226 4.226 0 1 1 0 8.453zM63.121 30.433H4.227a4.226 4.226 0 1 1 0-8.453H63.12a4.226 4.226 0 1 1 0 8.453zM63.121 52.412H4.227a4.227 4.227 0 0 1 0-8.454H63.12a4.227 4.227 0 0 1 0 8.454z"></path>
            </svg>
          </div>
        </div>
      </div>

      {openHamburguer && <NavBar setOpenHamburguer={setOpenHamburguer} />}

      <div className="none-m display-d ">
        <NavBarDesktop />
      </div>
      
    </header>
  );
};

export default Header;
