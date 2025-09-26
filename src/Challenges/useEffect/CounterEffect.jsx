import { useState, useEffect } from 'react';

function CounterEffect() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <div>
      <h5>Count: {count}</h5>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default CounterEffect;
