import React from 'react';
import './Screen.css';

const Screen = (props) => {
  const { compute, setCompute } = props;
  return (
    <div className="calc-screen">
      <div className="calc-expression">{compute}</div>
    </div>
  );
};

export default Screen;
