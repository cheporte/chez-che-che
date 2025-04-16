import React from 'react';
import DishCard from '@components/Menu/DishCard';
import './MenuCategorySection.sass';

type Dish = {
  name: string;
  price: string;
  imageUrl: string;
  ingredients: string[];
};

type MenuCategorySectionProps = {
  title: string;
  dishes: Dish[];
};

const MenuCategorySection: React.FC<MenuCategorySectionProps> = ({ title, dishes }) => {
  return (
    <section className="menu-section">
      <h2 className="category-title">{title}</h2>
      <div className="dish-list">
        {dishes.map((dish, idx) => (
          <DishCard
            key={idx}
            name={dish.name}
            price={dish.price}
            imageUrl={dish.imageUrl}
            ingredients={dish.ingredients}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuCategorySection;
