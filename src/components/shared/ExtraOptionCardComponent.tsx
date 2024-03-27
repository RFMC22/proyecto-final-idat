import { useState } from 'react';
import './../../styles/ExtraOptionCard.css';
import useShopping from '../../hooks/useShopping';

interface ExtraOptionCardComponent {
  image: string;
  btn: any;
  width: string;
  text: string;
  isActive: boolean;
  id: any;
  price: number;
  count: number;
  onClick: () => void;
}

const ExtraOptionCardComponent = ({
  image,
  btn,
  width,
  text,
  isActive,
  onClick,
  id,
  price,
  count,
}: ExtraOptionCardComponent) => {
  const { handleOrderClick } = useShopping();

  const handleClick = () => {
    onClick(), handleOrderClick(id, price, text, count);
  };
  return (
    <div className={`extraOptionCard ${width}`}>
      <div className="flex-col">
        <div
          className="imgContainer"
          onClick={() => {
            handleClick();
          }}
          style={{
            border: isActive
              ? '3px solid rgb(34, 57, 143)'
              : '1px solid rgb(112, 112, 112)',
          }}
        >
          <img src={image} alt="item-card" />
          {btn}
        </div>
        <p className="text-wrap">{text}</p>
      </div>
    </div>
  );
};

export default ExtraOptionCardComponent;
