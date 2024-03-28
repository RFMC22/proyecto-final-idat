import useShopping from '../../hooks/useShopping';
import './../../styles/BluetBtn.css';

const BlueBtn = ({ text, myclass }: { text: string; myclass: string }) => {
  const { handleOrderClick, setSaveLocalStorage } = useShopping();
  return (
    <button
      className={`blueBtn ${myclass}`}
      onClick={() => {
        handleOrderClick(999, 0, '', 1, 1), setSaveLocalStorage(true);
      }}
    >
      {text}
    </button>
  );
};

export default BlueBtn;

// handleOrderClick(id, price, text, count === '' ? 1 : counter, question)
