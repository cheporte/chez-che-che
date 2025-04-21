import React, { useState, useEffect } from 'react';
import DishCard from '@components/Menu/DishCard';
import './MenuCategorySection.sass';
import { fetchMenu } from '@services/api';

type MenuCategorySectionProps = {
  title: string;
};

type DishType = {
  name: string;
  price: string;
  image: string;
  ingredients: string[];
};

const MenuCategorySection: React.FC<MenuCategorySectionProps> = ({ title }) => {
  const [dishes, setDishes] = useState<DishType[]>([]);

  useEffect(() => {
    const loadDishes = async () => {
      try {
        const category = title.split(' ').at(-1)?.toLowerCase();
        if (category) {
          const dishesData = await fetchMenu(category);
          setDishes(dishesData);
        }
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    loadDishes();
  }, [title]);

  return (
    <section className="menu-section">
      <h2 className="category-title">{title}</h2>
      <div className="menu-section__dishes">
        {dishes.map((dish, idx) => (
          <DishCard
            key={idx}
            name={dish.name}
            price={dish.price}
            imageUrl={dish.image}
            ingredients={dish.ingredients}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuCategorySection;
