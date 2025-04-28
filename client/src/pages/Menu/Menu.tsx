import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/pages/menu.sass';

import RestaurantButton from '@components/RestaurantButton';
import MenuCategorySection from '@components/Menu/MenuCategorySection';

const Menu: React.FC = () => {
  return (
    <main className="menu-page">
      <Link to='/'>
        <RestaurantButton className='back-btn' variant='ghost' size='md'>Go Back</RestaurantButton>
      </Link>
      <div className='menu-page__categories'>
        <h1>Explore Our Offers</h1>
        <nav className='menu-page__navigation'>
          <div className='menu-page__navigation__option'>
            <Link to='/menu/starters'>
              <RestaurantButton variant='primary' size='lg'>Starters</RestaurantButton>
            </Link>
          </div>
          <div className='menu-page__navigation__option'>
            <Link to='/menu/mains'>
              <RestaurantButton variant='primary' size='lg'>Mains</RestaurantButton>
            </Link>
          </div>
          <div className='menu-page__navigation__option'>
            <Link to='/menu/desserts'>
              <RestaurantButton variant='primary' size='lg'>Desserts</RestaurantButton>
            </Link>
          </div>
          <div className='menu-page__navigation__option'>
            <Link to='/menu/drinks'>
              <RestaurantButton variant='primary' size='lg'>Drinks</RestaurantButton>
            </Link>
          </div>
        </nav>
      </div>

      <div className='menu-page__section-preview'>
        <MenuCategorySection title="Glance at Starters"/>
      </div>
      <div className='menu-page__section-preview'>
        <MenuCategorySection title="Glance at Mains"/>
      </div>
      <div className='menu-page__section-preview'>
        <MenuCategorySection title="Glance at Desserts"/>
      </div>
    </main>
  );
};

export default Menu;
