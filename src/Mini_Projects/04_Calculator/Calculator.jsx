import React from 'react';
import { useState } from 'react';
import Screen from './Screen';
import Keys from './Keys';
import './Calculator.css';

const Calculator = () => {
  const [compute, setCompute] = useState('0');

  return (
    <div className="calc-container">
      <Screen compute={compute} setCompute={setCompute} />
      <Keys compute={compute} setCompute={setCompute} />
    </div>
  );
};

export default Calculator;
