import './../../styles/NavBar.css';

export const NavBar = ({setOpenHamburguer}:any) => {

    const handleClose=()=>{
        console.log('Hizo click');
        setOpenHamburguer(false);

    }
  return (
    <div className="NavBarComponent">
      <div className="flex-between navBarHeader">
        <svg
          data-v-5520b854=""
          xmlns="http://www.w3.org/2000/svg"
          width="133.582"
          height="46.489"
        >
          <path
            d="M88.573.003a105.669 105.669 0 0 1-.973 4.67c-1.458.015-25.658 2.239-29.27 2.489.208-1.548.64-3.056.929-4.59C62.184 2.258 81.731.554 88.573.003z"
            fill="#e10b19"
          ></path>
          <path
            d="M121.792 7.239a12.167 12.167 0 0 1 7.79-2.557 27.7 27.7 0 0 1 4 .131c-.307 1.9-.765 3.77-1.149 5.654-.127.572-.235 1.15-.407 1.712a5.371 5.371 0 0 0-4.231-.47 2.95 2.95 0 0 0-2.024 2.125 1.806 1.806 0 0 0 .307 1.7c.915 1.109 2.31 1.657 3.3 2.687a6.15 6.15 0 0 1 2.013 4.647 11.361 11.361 0 0 1-1.736 6.635 10.883 10.883 0 0 1-6.709 4.308 17.617 17.617 0 0 1-8.005.083c.524-2.366.993-4.742 1.515-7.108a8.879 8.879 0 0 0 4.188.105 2.705 2.705 0 0 0 1.85-3.106c-.44-1.092-1.513-1.712-2.375-2.436a14.332 14.332 0 0 1-2.06-2.042 21.117 21.117 0 0 1-8.836 13.148 19.536 19.536 0 0 1-8.11 3.448 12.08 12.08 0 0 1-8.356-1.441 9.619 9.619 0 0 1-4.045-5.3 12.967 12.967 0 0 1-9.636 7.792c-1.914.359-3.87.4-5.8.614-3.756.3-7.507.653-11.262.958-.445-3.6-.931-7.2-1.356-10.807-1.723 1.917-6.112 7.287-6.661 7.988-.446-.617-3.19-5.7-4.268-7.538-.049.008-3.709 7.941-5.428 11.913-3.878.385-20.186 1.831-24.462 2.123.346-1.892.851-3.757 1.116-5.663a13.088 13.088 0 0 1-7.3 5.835 16.323 16.323 0 0 1-4.185.767c-3.157.25-6.308.594-9.468.785.562-3.177 5.631-26.772 5.877-27.685 1.515-.155 3.036-.246 4.551-.4 2.512-.171 5.086-.656 7.569.008a4.953 4.953 0 0 1 3.5 2.65 7.064 7.064 0 0 1 .391 3.5 6.551 6.551 0 0 1-3.924 5.2 5.108 5.108 0 0 1 2.992 1.524 5.616 5.616 0 0 1 1.12 2.841c1.232-5.676 2.392-11.369 3.638-17.042 5.147-.477 17.247-1.546 18.152-1.564-.431 2.436-1.059 4.835-1.483 7.271-.442.11-7.68.71-10.847.984a30.485 30.485 0 0 0-.709 3.458c2.871-.241 5.737-.554 8.611-.748-.352 1.909-1.244 6.106-1.46 6.106-2.833.307-5.678.484-8.515.758-.2 1.139-.488 2.261-.676 3.4 3.568-.265 7.131-.6 10.7-.9.205-.008.248-.259.345-.4 2.335-5.362 4.708-10.708 7.033-16.074.7-1.505 1.309-3.052 2.034-4.544 1.809 3.288 5.8 10.528 6 10.848 3.2-3.775 10.006-12.216 10.444-12.4 1.029 6.628 2.145 13.245 3.191 19.87.1-.184 2.992-13.666 4.379-20.205 2.566-.238 5.136-.445 7.7-.685a10.866 10.866 0 0 1 6.138.968 4.382 4.382 0 0 1 2.148 3.078 7.493 7.493 0 0 1-.794 4.863 5.941 5.941 0 0 1-3.159 2.715 6.63 6.63 0 0 1 2.022.677 6.348 6.348 0 0 1 1.451 1.3 20.407 20.407 0 0 1 6.764-11.462 21.414 21.414 0 0 1 7.362-4.355 14.676 14.676 0 0 1 7.694-.641 9.891 9.891 0 0 1 6.236 4.047 10.511 10.511 0 0 1 1.193 2.425 13.364 13.364 0 0 1 4.122-6.076zm-17.945 7.034a10.72 10.72 0 0 0-7.6 7.183 6.229 6.229 0 0 0 .268 4.524 4.734 4.734 0 0 0 3.232 2.459 7.716 7.716 0 0 0 5.142-.9 11.756 11.756 0 0 0 3.922-3.485 8.079 8.079 0 0 0 1.612-5.743 4.774 4.774 0 0 0-3.189-3.907 6.281 6.281 0 0 0-3.387-.131zM78.86 15.921c-.324 1.424-.658 2.849-.885 4.294a5.787 5.787 0 0 0 3.475-.862 2.867 2.867 0 0 0 .98-2.8 1.48 1.48 0 0 0-1.21-.758 11.12 11.12 0 0 0-2.364.126zm-67.077 5.862c-.248 1.446-.647 2.862-.894 4.309a7.323 7.323 0 0 0 3.041-.574 3.032 3.032 0 0 0 1.517-2.507 1.249 1.249 0 0 0-1-1.308 9.25 9.25 0 0 0-2.668.08zm64.89 4.573c-.391 1.633-.769 3.274-1.07 4.926a8.812 8.812 0 0 0 3.252-.552 3.515 3.515 0 0 0 1.912-2.875 1.43 1.43 0 0 0-.969-1.5 8.619 8.619 0 0 0-3.129 0zM9.558 32.281a108.228 108.228 0 0 0-.995 4.87 13.929 13.929 0 0 0 2.687-.336 3.34 3.34 0 0 0 2.335-3.868c-.416-.834-1.483-.934-2.309-.875a8.7 8.7 0 0 0-1.721.209z"
            fill="#fff"
          ></path>
          <path
            d="M113.753 39.451a2.741 2.741 0 0 1-.151 1.276c-.278 1.075-.435 2.174-.677 3.256-.939.249-28.548 2.491-29.355 2.506.158-1.517.6-2.987.9-4.48 1.582-.231 27.755-2.591 29.283-2.558z"
            fill="#fbb905"
          ></path>
        </svg>

        <svg
          data-v-5520b854=""
          xmlns="http://www.w3.org/2000/svg"
          width="31.469"
          height="31.471"
          style={{ fill: 'rgb(255, 255, 255)' }}
        >
          <path
            d="m638.487 569.326-3.8-3.8a3.147 3.147 0 0 0-4.446 0l-1.726 1.726a1.567 1.567 0 0 1-1.115.461 1.564 1.564 0 0 1-1.115-.461l-7.484-7.49a1.576 1.576 0 0 1 0-2.231l1.726-1.726a3.148 3.148 0 0 0 0-4.447l-3.8-3.785a3.144 3.144 0 0 0-4.441 0l-1.385 1.374a10.153 10.153 0 0 0 0 14.344l11.858 11.864a10.138 10.138 0 0 0 14.344 0l1.382-1.382a3.147 3.147 0 0 0 .002-4.447zm-24.594-19.536.305-.3a.434.434 0 0 1 .309-.128.438.438 0 0 1 .311.129l3.8 3.785a.439.439 0 0 1 0 .619l-.31.31zm-1.076 11.586a7.4 7.4 0 0 1-.775-9.61l4.392 4.392a4.29 4.29 0 0 0 .455 5.52l7.484 7.49a4.288 4.288 0 0 0 5.519.455l4.392 4.392a7.392 7.392 0 0 1-9.61-.775zm23.883 10.172a.434.434 0 0 1-.128.31l-.31.309-4.418-4.418.31-.31a.439.439 0 0 1 .619 0l3.8 3.8a.434.434 0 0 1 .127.309z"
            transform="translate(-607.937 -546.654)"
          ></path>
        </svg>
      </div>

      <nav>
        <ul className="navList">
          <li>MI CUENTA</li>
          <li>LOCALES</li>
          <li>ZONAS DE REPARTO</li>
          <li>NOSOTROS</li>
        </ul>
      </nav>

      <div className="socMedia flex">
        <div className="circle">
          <svg
            data-v-5520b854=""
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 92.384 92.371"
          >
            <path
              d="M46.191 0a46.185 46.185 0 1 0 46.193 46.187A46.191 46.191 0 0 0 46.191 0zm14.608 26.456s-4.425-.024-6.22-.024c-3.525 0-3.284 1.372-3.284 5.709v3.215h9.5l-1.71 11.225h-7.793v30.175h-13.2V46.583h-6.5V35.356h6.5V26.32a10.678 10.678 0 0 1 3.992-8.123 13.4 13.4 0 0 1 8.043-2.58l10.672.018z"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <div className="circle">
          <svg
            data-v-5520b854=""
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 90.864 90.86"
          >
            <path
              d="M45.43 0a45.43 45.43 0 1 0 45.435 45.434A45.432 45.432 0 0 0 45.43 0zm28.742 59.867a7.525 7.525 0 0 1-5.3 5.306c-4.675 1.248-23.436 1.248-23.436 1.248s-18.75 0-23.436-1.248a7.532 7.532 0 0 1-5.306-5.306c-1.248-4.675-1.248-14.437-1.248-14.437s0-9.762 1.248-14.437A7.528 7.528 0 0 1 22 25.687c4.686-1.25 23.436-1.25 23.436-1.25s18.761 0 23.436 1.25a7.522 7.522 0 0 1 5.3 5.306c1.25 4.675 1.25 14.438 1.25 14.438s-.004 9.761-1.25 14.436z"
              fill="#fff"
            ></path>
            <path d="m39.44 54.428 15.582-9-15.582-9z" fill="#fff"></path>
          </svg>
        </div>
        <div className="circle">
          <svg
            data-v-5520b854=""
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 90.867 90.86"
          >
            <path
              d="M45.437 0a45.43 45.43 0 1 0 45.43 45.434A45.435 45.435 0 0 0 45.437 0zm21.6 34.351c.015.482.027.954.027 1.438 0 14.725-11.2 31.712-31.709 31.712a31.5 31.5 0 0 1-17.081-5.007 22.405 22.405 0 0 0 16.5-4.618 11.159 11.159 0 0 1-10.413-7.731 11.356 11.356 0 0 0 2.1.2 11.112 11.112 0 0 0 2.929-.389 11.163 11.163 0 0 1-8.935-10.937v-.137a11.052 11.052 0 0 0 5.047 1.4 11.157 11.157 0 0 1-3.45-14.88 31.631 31.631 0 0 0 22.969 11.641 11.164 11.164 0 0 1 10.86-13.683 11.076 11.076 0 0 1 8.131 3.525 22.348 22.348 0 0 0 7.076-2.715 11.194 11.194 0 0 1-4.9 6.173 22.475 22.475 0 0 0 6.4-1.757 22.8 22.8 0 0 1-5.549 5.762z"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <div className="circle">
          <svg
            data-v-5520b854=""
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 89.047 89.047"
          >
            <g fill="#fff">
              <path d="M44.525 35.67a8.854 8.854 0 1 0 8.853 8.855 8.863 8.863 0 0 0-8.853-8.855z"></path>
              <path d="M54.259 23.171H34.787a11.631 11.631 0 0 0-11.616 11.616v19.471a11.631 11.631 0 0 0 11.616 11.616h19.471a11.629 11.629 0 0 0 11.616-11.616V34.787a11.629 11.629 0 0 0-11.615-11.616zm-9.735 34.057a12.7 12.7 0 1 1 12.7-12.7 12.72 12.72 0 0 1-12.7 12.7zm14.084-23.484a3.307 3.307 0 1 1 3.308-3.306 3.308 3.308 0 0 1-3.308 3.306z"></path>
              <path d="M44.527 0A44.525 44.525 0 0 0 .002 44.525a44.524 44.524 0 0 0 44.525 44.522 44.522 44.522 0 0 0 44.52-44.522A44.523 44.523 0 0 0 44.527 0zm25.112 54.259a15.4 15.4 0 0 1-15.38 15.376H34.788a15.394 15.394 0 0 1-15.375-15.378V34.788a15.392 15.392 0 0 1 15.375-15.375h19.471a15.394 15.394 0 0 1 15.378 15.375z"></path>
            </g>
          </svg>
        </div>
      </div>

      <div className="btnClose" onClick={handleClose}>
        <svg
          data-v-5520b854=""
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 60.655 54.893"
        >
          <path
            d="M919.467,1021.586,941.507,1002a4.5,4.5,0,1,0-5.977-6.728l-22.839,20.29-22.838-20.29a4.5,4.5,0,0,0-5.978,6.728l22.041,19.582-22.041,19.581a4.5,4.5,0,1,0,5.978,6.729l22.838-20.291L935.53,1047.9a4.5,4.5,0,1,0,5.977-6.729Z"
            transform="translate(-882.364 -994.139)"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </div>
  );
};
