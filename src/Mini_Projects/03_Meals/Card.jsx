import React from 'react';
import './Card.css';

const Card = ({ meal }) => {
  if (!meal) return null;
  const { strMeal, strMealThumb, strCategory, strArea, strInstructions } = meal;

  return (
    <article className="card">
      {strMealThumb && (
        <img src={strMealThumb} alt={strMeal} className="card-image" />
      )}
      <div className="card-content">
        <h3 className="card-title">{strMeal}</h3>
        <p className="card-meta">
          {strCategory} — {strArea}
        </p>
        <details className="card-instructions">
          <summary>Instructions</summary>
          <p>{strInstructions}</p>
        </details>
      </div>
    </article>
  );
};

export default Card;
