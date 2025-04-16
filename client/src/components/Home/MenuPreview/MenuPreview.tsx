import React from 'react';
import './MenuPreview.sass';

import RestaurantButton from '@components/RestaurantButton';
import { Link } from 'react-router-dom';

import { starters, mains, desserts } from '@data/menuData';

const MenuPreview: React.FC = () => {
    return (
        <section id='menu-preview'>
            <h2>Explore Our Menu</h2>
            {/*TODO: Fill dynamically after server implementation*/}
            <div className='menu-items'>
                <div className='menu-item'>
                    <img src={starters[0].imageUrl} alt={starters[0].imageUrl} />
                    <h3>{starters[0].name}</h3>
                    <p>€{starters[0].price}</p>
                </div>
                <div className='menu-item'>
                    <img src={mains[0].imageUrl} alt={mains[0].name} />
                    <h3>{mains[0].name}</h3>
                    <p>€{mains[0].price}</p>
                </div>
                <div className='menu-item'>
                    <img src={desserts[0].imageUrl} alt={desserts[0].name} />
                    <h3>{desserts[0].name}</h3>
                    <p>€{desserts[0].price}</p>
                </div>
            </div>
            <Link to='/chez-che-che/menu'><RestaurantButton variant="primary" size="lg">Explore More</RestaurantButton></Link>
        </section>
    );
}

export default MenuPreview;