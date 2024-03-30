import { useState } from 'react';
import './../../styles/ExtraOptionCard.css';
import useShopping from '../../hooks/useShopping';
import { Counter } from '..';

interface ExtraOptionCardComponent {
  image: string;
  btn: any;
  width: string;
  text: string;
  isActive: boolean;
  question: any;
  price: number;
  count: any;
  id: any;
  onClick: () => void;
}

const ExtraOptionCardComponent = ({
  image,
  btn,
  width,
  text,
  isActive,
  onClick,
  question,
  id,
  price,
  count,
}: ExtraOptionCardComponent) => {
  const { handleOrderClick } = useShopping();
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    onClick();
    handleOrderClick(id, price, text, count === '' ? 1 : counter, question);
    console.log('handle order click en extra card component:',id,price,text,count,counter,question);
  };

  return (
    <div className={`extraOptionCard ${width}`}>
      <div className="flex-col">
        <div
          className="imgContainer-card"
          onClick={() => handleClick()}
          style={{
            border: isActive
              ? '3px solid rgb(34, 57, 143)'
              : '1px solid rgb(112, 112, 112)',
          }}
        >
          <img src={image} alt="item-card" />
          {btn && (
            <Counter
              myclass="Counter"
              setCounter={setCounter}
              counter={counter}
            />
          )}
          {false && (
            <p
              style={{
                textAlign: 'center',
                fontSize: '14px',
                fontFamily: 'kulristaRegular',
                padding: '2px 0',
              }}
            >{`+S/.${price}`}</p>
          )}
        </div>
        <p className="text-wrap">{text}</p>
      </div>
    </div>
  );
};

export default ExtraOptionCardComponent;
