import './../../styles/BluetBtn.css';
const BlueBtn = ({ text, myclass }: { text: string,myclass:string }) => {
  return <button className={`blueBtn ${myclass}`}>{text}</button>;
};

export default BlueBtn;
