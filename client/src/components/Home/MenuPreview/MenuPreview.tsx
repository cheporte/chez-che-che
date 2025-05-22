import React from 'react';
import './MenuPreview.sass';

import { useTranslation } from 'react-i18next';

import RestaurantButton from '@components/RestaurantButton';
import { Link } from 'react-router-dom';

import { starters, mains, desserts } from '@data/menuData';

const MenuPreview: React.FC = () => {
  const { t } = useTranslation();
  return (
      <section id='menu-preview'>
          <h2>{t("menu_preview_title")}</h2>
          {/*TODO: Fill dynamically after server implementation*/}
          <div className='menu-items'>
              <div className='menu-item'>
                  <img src={starters[0].imageUrl} alt={starters[0].imageUrl} />
                  <h3>{starters[0].name}</h3>
              </div>
              <div className='menu-item'>
                  <img src={mains[0].imageUrl} alt={mains[0].name} />
                  <h3>{mains[0].name}</h3>
              </div>
              <div className='menu-item'>
                  <img src={desserts[0].imageUrl} alt={desserts[0].name} />
                  <h3>{desserts[0].name}</h3>
              </div>
          </div>
          <Link to='/menu'><RestaurantButton variant="primary" size="lg">{t("explore_menu_btn")}</RestaurantButton></Link>
      </section>
  );
}

export default MenuPreview;
