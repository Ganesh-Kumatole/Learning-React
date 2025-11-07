import { useState, useEffect } from 'react';

const useFetchCurrencies = (selectedCurrency) => {
  // State to hold response of API call
  const [data, setData] = useState({});

  useEffect(() => {
    const apiURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;

    async function requestCurrencies() {
      const response = await fetch(`${apiURL}/${selectedCurrency}.json`);
      const parsedJSON = await response.json();
      setData(parsedJSON[selectedCurrency]);
    }

    requestCurrencies();
  }, [selectedCurrency]);

  return data;
};

export default useFetchCurrencies;
