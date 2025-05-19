import React from "react";

import { starters, mains, desserts, drinks } from "@data/menuData";
import "./DishSelection.sass";

type DishSelectionProps = {
  selectedDishes: string[];
  setSelectedDishes: React.Dispatch<React.SetStateAction<string[]>>;
};

const DishSelection: React.FC<DishSelectionProps> = ({
  selectedDishes, setSelectedDishes
}) => {
    const toggleDish = (name: string) => {
        setSelectedDishes((prev) =>
            prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]
        );
    };

    return (
        <section>
            <h2>Choose Your Dishes</h2>
            <div className="dish-grid">
                {[...starters, ...mains, ...desserts, ...drinks].map((dish) => (
                    <div
                        key={dish.name}
                        className={`dish-card ${selectedDishes.includes(dish.name) ? 'selected' : ''}`}
                        onClick={() => toggleDish(dish.name)}
                    >
                        <img src={dish.imageUrl} alt={dish.name} />
                        <h3>{dish.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DishSelection;
