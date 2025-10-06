import { useState } from 'react';
import Search from './Search';
import useFetchMeals from './useFetchMeals';
import Card from './Card';
import './Main.css';

const Main = () => {
  const [query, setQuery] = useState('');
  const apiURL = query
    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
        query
      )}`
    : '';

  const { data, loading, error } = useFetchMeals(apiURL);

  return (
    <div className="meals-container">
      <h2>Meals</h2>
      <Search onSearch={setQuery} />

      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      {!loading && data && data.meals === null && (
        <p className="no-results-message">No results found.</p>
      )}

      <div className="meals-grid">
        {data &&
          data.meals &&
          data.meals.map((meal) => <Card key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default Main;
