import React from 'react';
import './Keys.css';

const Keys = (props) => {
  const { compute, setCompute } = props;

  const updateExp = (e) => {
    const key = e.target.innerText;
    compute === '0' ? setCompute(key) : setCompute(compute + key);
  };

  const allClear = () => {
    setCompute('0');
  };

  const clear = () => {
    compute.length === 1
      ? setCompute('0')
      : setCompute(compute.slice(0, compute.length - 1));
  };

  const updateResult = () => {
    try {
      const result = eval(compute);
      setCompute(result);
    } catch (error) {
      alert(`Invalid Expression!`);
    }
  };

  return (
    <div className="calc-keys">
      <button className="calc-key ac" onClick={allClear}>
        AC
      </button>
      <button className="calc-key c" onClick={clear}>
        C
      </button>
      <button className="calc-key divide operand" onClick={updateExp}>
        /
      </button>
      <button className="calc-key mul operand" onClick={updateExp}>
        *
      </button>
      <button className="calc-key seven operand" onClick={updateExp}>
        7
      </button>
      <button className="calc-key eight operand" onClick={updateExp}>
        8
      </button>
      <button className="calc-key nine operand" onClick={updateExp}>
        9
      </button>
      <button className="calc-key sub operand" onClick={updateExp}>
        -
      </button>
      <button className="calc-key four operand" onClick={updateExp}>
        4
      </button>
      <button className="calc-key five operand" onClick={updateExp}>
        5
      </button>
      <button className="calc-key six operand" onClick={updateExp}>
        6
      </button>
      <button className="calc-key add operand" onClick={updateExp}>
        +
      </button>
      <button className="calc-key one operand" onClick={updateExp}>
        1
      </button>
      <button className="calc-key two operand" onClick={updateExp}>
        2
      </button>
      <button className="calc-key three operand" onClick={updateExp}>
        3
      </button>
      <button className="calc-key equals" onClick={updateResult}>
        =
      </button>
      <button className="calc-key zero operand" onClick={updateExp}>
        0
      </button>
      <button className="calc-key dot operand" onClick={updateExp}>
        .
      </button>
    </div>
  );
};

export default Keys;
