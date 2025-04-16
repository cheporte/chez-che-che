import React from 'react';
import './DishCard.sass';

type DishCardProps = {
  imageUrl: string;
  name: string;
  price: string;
  ingredients: string[];
};

const DishCard: React.FC<DishCardProps> = ({ imageUrl, name, price, ingredients }) => {
  return (
    <div className="dish-card">
      <img src={imageUrl} alt={name} className="dish-image" />
      <div className="dish-info">
        <h3 className="dish-name">{name}</h3>
        <p className="dish-price">€{price}</p>
        <details className="dish-ingredients">
          <summary>Ingredients</summary>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default DishCard;
