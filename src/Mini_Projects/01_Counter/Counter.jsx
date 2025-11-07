import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
    console.log(count);
    setCount(count + 2);
    console.log(count);
  };
  const decrementCounter = () => setCount(count - 1);

  return (
    <div className="counter-container">
      <button id="minus-btn" onClick={decrementCounter}>
        -
      </button>
      <h2 className="counter-text">{count}</h2>
      <button id="plus-btn" onClick={incrementCounter}>
        +
      </button>
    </div>
  );
}

export default Counter;
