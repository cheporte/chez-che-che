import React, { useState } from "react";

import { chefs } from "@data/chefData";
import './ChefSelection.sass';

type Chef = {
    name: string,
    image: string
}

const ChefSelection: React.FC = () => {
    const [selectedChef, setSelectedChef] = useState<Chef | null>(null);

    return (
        <section>
            <h2>Choose Your Chef</h2>
            <div className="chef-list">
                {chefs.map((chef) => (
                    <div
                        key={chef.name}
                        className={`chef-card ${selectedChef === chef.name ? 'selected' : ''}`}
                        onClick={() => setSelectedChef(chef.name)}
                    >
                        <img src={chef.image} alt={chef.name} />
                        <h3>{chef.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChefSelection;