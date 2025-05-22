import React from 'react';
import { Link } from 'react-router-dom';

import './ChefsHighlight.sass';
import RestaurantButton from '@components/RestaurantButton';

import { useTranslation } from 'react-i18next';
import { chefs } from '@data/chefData';

const ChefsHighlight: React.FC = () => {
  const { t } = useTranslation();
  return (
      <section id='chefs-highlight'>
        <h2>{t("chef_preview_title")}</h2>
          <div className='chefs'>
              {/*TODO: Replace with components, fill dynamically*/}
              <div className="chef-card">
                  <img src={chefs[0].image} alt={chefs[0].name} />
                  <h3>{chefs[0].name}</h3>
                  <p>Chef de Cuisine</p>
              </div>
              <div className="chef-card">
                  <img src={chefs[1].image} alt={chefs[1].name} />
                  <h3>{chefs[1].name}</h3>
                  <p>Pâtissière</p>
                </div>
              <div className="chef-card">
                  <img src={chefs[2].image} alt={chefs[2].name} />
                  <h3>{chefs[2].name}</h3>
                  <p>Sommelier</p>
              </div>
          </div>
          <Link to='/chefs'>
            <RestaurantButton variant="primary" size="lg">{t("meet_chefs_btn")}</RestaurantButton>
          </Link>
      </section>
    );
}

export default ChefsHighlight;
