import Details from './components/Details';
import useFetchCurrencies from './hooks/useFetchCurrencies';

import { useState } from 'react';

import './css/Container.css';

const Container = () => {
  // Defining required states
  const [fromAmt, setFromAmt] = useState('');
  const [toAmt, setToAmt] = useState('');
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');

  const currencies = useFetchCurrencies(fromCurrency);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmt('');
    setToAmt('');
  };

  const convert = (e) => {
    e.preventDefault();
    const equivalentAmt = +fromAmt * currencies[toCurrency];
    setToAmt(equivalentAmt.toFixed(2));
  };

  return (
    <>
      <section className="conversion-container">
        <form onSubmit={convert}>
          <Details
            label="from"
            amount={fromAmt}
            updateAmt={setFromAmt}
            selectedCurrency={fromCurrency}
            updateCurrency={setFromCurrency}
            currencies={currencies}
          />
          <div className="swap-button-wrapper">
            <button className="swap-button" onClick={swapCurrencies}>
              Swap
            </button>
          </div>
          <Details
            label="to"
            amount={toAmt}
            updateAmt={setToAmt}
            selectedCurrency={toCurrency}
            updateCurrency={setToCurrency}
            currencies={currencies}
          />
          <button type="submit">Convert</button>
        </form>
      </section>
    </>
  );
};

export default Container;
