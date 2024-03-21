import './../../styles/YellowBtn.css';
import { yellowBtnProps } from '../../interfaces/NavBarProps';

const YellowBtn = ({
  text,
  redText,
  icon,
  position,
  iconHeight,
  Circle,
  handleClick
}: yellowBtnProps) => {
  return (
    <div className={`btnYellow ${position}`}>
      <div className=" flex flex-col ">
        <span>{text}</span>
        <span className="red">{redText}</span>
      </div>

      <img src={icon} alt="icon" className={`icon ${iconHeight}`} onClick={handleClick} />
      <div className="relative">
        <span className={`${Circle}`}>0</span>
      </div>
    </div>
  );
};

export default YellowBtn;
