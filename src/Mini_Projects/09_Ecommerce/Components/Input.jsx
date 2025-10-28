import React from 'react';

const Input = (props) => {
  const { id, labelTxt, name, setRadioFilter, radioFilter } = props;

  const handleSelectedOption = (e) => {
    const filterType = e.target.name;
    const option = e.target.value;

    setRadioFilter((prevRadioFilter) => ({
      ...prevRadioFilter,
      [filterType]: filterType === 'color' && option === 'All' ? 'all' : option,
    }));
  };

  return (
    <div className="radioBtn-wrapper">
      <input
        type="radio"
        name={name}
        id={id}
        value={labelTxt}
        onClick={handleSelectedOption}
        checked={
          name === 'color'
            ? (labelTxt === 'All' && radioFilter.color === 'all') ||
              radioFilter.color === labelTxt
            : radioFilter[name] === labelTxt
        }
      />
      <label htmlFor={id}>{labelTxt}</label>
    </div>
  );
};

export default Input;
