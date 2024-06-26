
import './../../styles/Counter.css';

const Counter = ({ myclass, counter, setCounter }: any) => {
  const handleDisminuir = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleIncrementar = () => {
    setCounter(counter + 1);
  };


  return (
    <div className={`${myclass}`}>
      <div className="flex-row">
        <button className="btn" onClick={handleDisminuir}>
          -
        </button>
        <p className="quantity">{counter}</p>
        <button className="btn" onClick={handleIncrementar}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
