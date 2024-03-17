import './../../styles/YellowBtn.css';

export const YellowBtn = ({
  text,
  redText,
}: {
  text: string;
  redText: string;
}) => {
  return (
    <div className="btnYellow">
      <div className=" flex flex-col">
        <p>{text}</p>
        <p className='red'>{redText}</p>
      </div>

      <svg
        data-v-17182645=""
        xmlns="http://www.w3.org/2000/svg"
        width="99.754"
        height="30.587"
        viewBox="0 0 99.754 86.587"
      >
        <g transform="translate(-2037.468 -736.948)">
          <path
            d="M2079.685,757.479h-32.918a1.647,1.647,0,0,0-1.645,1.647v23.041a1.647,1.647,0,0,0,1.645,1.647h32.918a1.647,1.647,0,0,0,1.647-1.647V759.126A1.647,1.647,0,0,0,2079.685,757.479Zm-1.645,23.044h-29.625V760.771h29.625Z"
            transform="translate(9.305 26.054)"
            fill="#21388b"
            stroke="#21388b"
            stroke-width="1"
          ></path>{' '}
          <path
            d="M2136.706,755.481a1.578,1.578,0,0,0-.193-.688c-.016-.028-.009-.06-.025-.087l-9.874-16.459a1.653,1.653,0,0,0-1.413-.8H2049.49a1.65,1.65,0,0,0-1.413.8l-9.875,16.459c-.016.028-.011.06-.025.087a1.623,1.623,0,0,0-.2.688c0,.021-.012.039-.012.06l0,.012v3.292c0,7.022,4.139,12.739,9.875,14.347v48.2a1.647,1.647,0,0,0,1.647,1.647H2125.2a1.645,1.645,0,0,0,1.645-1.647v-48.7c5.572-2.181,9.876-7.792,9.876-13.841v-3.292l0-.012A.524.524,0,0,0,2136.706,755.481Zm-4.537-1.574h-18.911l-3.95-13.167h14.961ZM2110.389,768.2c-2.524,3.757-6.09,5.459-11.522,5.459-4.868,0-9.014-1.452-11.522-3.975V757.2h23.044Zm-46.087-11h19.751v12.5c-2.6,2.752-5.588,3.955-9.874,3.955-4.866,0-7.155-1.254-9.877-5.441Zm19.751-16.459v13.167h-19.186l3.95-13.167Zm21.817,0,3.95,13.167h-22.476V740.74Zm-55.449,0h14.961l-3.95,13.167h-18.911Zm-9.161,18.1V757.2h19.751v10.726c-2,1.454-6.589,2.441-9.877,2.441C2044.953,770.366,2041.26,764.509,2041.26,758.844Zm59.252,60.9V786.825h16.458v32.918Zm23.043,0h-3.292V785.18a1.647,1.647,0,0,0-1.647-1.647h-19.749a1.647,1.647,0,0,0-1.647,1.647v34.563h-46.085V773.658c2.892,0,7.939-.725,11.11-2.588,2.671,3.748,5.768,5.881,11.934,5.881,4.838,0,8.468-1.321,11.554-4.245,3.147,2.715,7.824,4.245,13.135,4.245,5.968,0,10.4-1.921,13.505-5.855a18.4,18.4,0,0,0,9.536,2.563,13.082,13.082,0,0,0,1.647-.115Zm9.875-60.9c0,5.922-5.6,11.522-11.522,11.522-2.713,0-6.175-.757-8.229-2.409V757.2h19.751Z"
            transform="translate(0 0)"
            fill="#21388b"
            stroke="#21388b"
            stroke-width="1"
          ></path>{' '}
          <circle
            cx="1.646"
            cy="1.646"
            r="1.646"
            transform="translate(2110.387 803.284)"
            fill="#21388b"
            stroke="#21388b"
            stroke-width="1"
          ></circle>
        </g>
      </svg>
    </div>
  );
};
