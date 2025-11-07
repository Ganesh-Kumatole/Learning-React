import '../css/Details.css';

const Details = (props) => {
  const {
    label,
    amount,
    updateAmt,
    selectedCurrency,
    updateCurrency,
    currencies,
  } = props;

  const currenciesList = Object.keys(currencies);

  return (
    <>
      <div className={`${label}-details`}>
        <input
          type="number"
          id={label}
          placeholder={label.toUpperCase()}
          value={amount}
          onChange={(e) => updateAmt(e.target.value)}
          disabled={label === 'to'}
          required={label === 'from'}
        />
        <div className="label-dropdown-wrapper">
          <select
            className={`${label}-currencies`}
            value={selectedCurrency}
            onChange={(e) => updateCurrency(e.target.value)}
          >
            {currenciesList.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Details;
