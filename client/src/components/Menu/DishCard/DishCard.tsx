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
    <div className="dishcard">
        <img className="dish-img" src={imageUrl} alt={name} />
        <div className="dishcard__info">
          <h3 className="dish-name">{name}</h3>
          <p className="dish-price">€{price}</p>
        </div>
        <details>
          <summary>Ingredients</summary>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </details>
    </div>
  );
};

export default DishCard;
