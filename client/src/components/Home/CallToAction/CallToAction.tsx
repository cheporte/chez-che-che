import React from 'react';
import { Link } from 'react-router-dom';

import RestaurantButton from '@components/RestaurantButton';
import './CallToAction.sass';

const CallToAction: React.FC = () => {
    return (
        <section id="cta">
            <h2>Ready for a Memorable Experience?</h2>
            <Link to="/reservations">
                <RestaurantButton variant='ghost' size='lg'>
                    Book a Table
                </RestaurantButton>
            </Link>
            <h2>or</h2>
            <Link to="/about">
                <RestaurantButton variant='ghost' size='lg'>
                    Read More
                </RestaurantButton>
            </Link>
        </section>
    );
}

export default CallToAction;