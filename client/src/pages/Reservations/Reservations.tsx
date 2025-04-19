import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/pages/reservations.sass';

import TableSelection from '@components/Reservations/TableSelection';
import DishSelection from '@components/Reservations/DishSelection';
import ChefSelection from '@components/Reservations/ChefSelection';
import RestaurantButton from '@components/RestaurantButton';

const Reservations: React.FC = () => {
    const handleSubmit = () => {
        console.log("Button clicked");
    }
    return (
        <>
            <div className="back-btn">
                <Link to='/chez-che-che'>
                    <RestaurantButton variant='ghost' size='lg' onclick={handleSubmit}>Go Back</RestaurantButton>
                </Link>
            </div>
            
            <div id="reservations-page">
                <h1>Customize your dining experience!</h1>
                <TableSelection />
                <DishSelection />
                <ChefSelection />
                <RestaurantButton variant='primary' size='lg' onclick={handleSubmit}>Submit Request</RestaurantButton>
            </div>
        </>
    );
}

export default Reservations;