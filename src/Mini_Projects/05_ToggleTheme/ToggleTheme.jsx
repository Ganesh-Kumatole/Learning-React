import React from 'react';
import { useState } from 'react';
import './ToggleTheme.css';

const ToggleTheme = () => {
  const [bgColor, setBgColor] = useState('white');
  const [txtColor, setTxtColor] = useState('black');
  const [btnStyle, setBtnStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
    border: '1px solid black',
  });

  const handleClick = () => {
    setBgColor(bgColor === 'white' ? 'black' : 'white');
    setTxtColor(txtColor === 'black' ? 'white' : 'black');
    setBtnStyle((btnStyle) => ({
      color: btnStyle.color === 'white' ? 'black' : 'white',
      backgroundColor: btnStyle.backgroundColor === 'black' ? 'white' : 'black',
      border:
        btnStyle.border === '1px solid black'
          ? '1px solid white'
          : '1px solid black',
    }));
  };

  return (
    <section className="container" style={{ backgroundColor: bgColor }}>
      <h1 className="text" style={{ color: txtColor }}>
        Hello World...
      </h1>
      <button className="toggle-btn" onClick={handleClick} style={btnStyle}>
        Click Here to Toggle
      </button>
    </section>
  );
};

export default ToggleTheme;
