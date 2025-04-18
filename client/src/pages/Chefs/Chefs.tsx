import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RestaurantButton from '@components/RestaurantButton';

import { chefs } from '@data/chefData';
import ChefSpotlight from '@components/Chefs/ChefSpotlight';
import PhilosophyCarousel from '@components/Chefs/PhilosophyCarousel';
import '@styles/pages/chefs.sass';

const Chefs: React.FC = () => {
    return (
      <div id="chefs">
        <Link to='/chez-che-che'>
          <RestaurantButton variant='ghost' size='md' className='back-btn'>Go Back</RestaurantButton>    
        </Link>
        <div className="chefs-page">
            <h1>
              <FontAwesomeIcon icon={['fas', 'star']} /> Our Chefs
            </h1>
            <div className="chef-list">
              {chefs.map((chef: any, index: React.Key | null | undefined) => (
                <ChefSpotlight key={index} chefData={chef} />
              ))}
            </div>
            <div className="chefs-page__philosophy">
              <h1>
                <FontAwesomeIcon icon={['fas', 'quote-left']} /> Our Philosophy
              </h1>
              <PhilosophyCarousel />
            </div>
            {/* TODO: Add other sections */}
        </div>
      </div>
    );
}

export default Chefs;