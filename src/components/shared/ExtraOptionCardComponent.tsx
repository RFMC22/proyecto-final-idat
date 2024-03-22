import './../../styles/ExtraOptionCard.css';

const ExtraOptionCardComponent = ({ image, btn, width, text }: any) => {
  return (
    <div className={`extraOptionCard`}>
      <div className="flex-col">
        <div className="imgContainer">
          <img src={image} alt="item-card" />
          {btn}
        </div>
        <p className="text-wrap">{text}</p>
      </div>
    </div>
  );
};

export default ExtraOptionCardComponent;
