import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/pages/menu.sass';

import { starters, mains, desserts } from '@data/menuData';

import RestaurantButton from '@components/RestaurantButton';
import MenuCategorySection from '@components/Menu/MenuCategorySection';

const Menu: React.FC = () => {
  return (
    <main className="menu-page">
      <Link to='/chez-che-che'>
        <RestaurantButton className='back-btn' variant='ghost' size='md'>Go Back</RestaurantButton>
      </Link>
      <div className='menu-page__categories'>
        <h1>Explore Our Offers</h1>
        <nav className='menu-page__navigation'>
          <div className='menu-page__navigation__option'>
            <Link to='/chez-che-che/menu/starters'>
              <RestaurantButton variant='primary' size='lg'>Starters</RestaurantButton>
            </Link>
          </div>
          <div className='menu-page__navigation__option'>
            <Link to='/chez-che-che/menu/mains'>
              <RestaurantButton variant='primary' size='lg'>Mains</RestaurantButton>
            </Link>
          </div>
          <div className='menu-page__navigation__option'>
            <Link to='/chez-che-che/menu/desserts'>
              <RestaurantButton variant='primary' size='lg'>Desserts</RestaurantButton>
            </Link>
          </div>
          <div className='menu-page__navigation__option'>
            <Link to='/chez-che-che/menu/drinks'>
              <RestaurantButton variant='primary' size='lg'>Drinks</RestaurantButton>
            </Link>
          </div>
        </nav>
      </div>

      <MenuCategorySection title="Glance at Starters" dishes={starters} />
      <MenuCategorySection title="Glance at Main Courses" dishes={mains} />
      <MenuCategorySection title="Glance at Desserts" dishes={desserts} />
    </main>
  );
};

export default Menu;
