import './PlusMinus.css';
import { useState } from 'react';

const PlusMinus = () => {
  let [number, setNumber] = useState(0);

  const incrementNumber = (event) => {
    setNumber(() => {
      return number + 1;
    });
  };

  const decrementNumber = (event) => {
    setNumber(() => {
      return number - 1;
    });
  };

  return (
    <div className="plus-minus">
      <h2 className="number">{number}</h2>
      <button className="increment" onClick={incrementNumber}>
        Plus
      </button>
      <button className="decrement" onClick={decrementNumber}>
        Minus
      </button>
    </div>
  );
};

export default PlusMinus;
