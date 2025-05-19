import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

import '@styles/pages/reservations.sass';

import TableSelection from '@components/Reservations/TableSelection';
import DishSelection from '@components/Reservations/DishSelection';
import ChefSelection from '@components/Reservations/ChefSelection';
import RestaurantButton from '@components/RestaurantButton';

const Reservations: React.FC = () => {
    const [selectedTable, setSelectedTable] = useState<number | null>(null);
    const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
    const [selectedChef, setSelectedChef] = useState<string>("");

    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async () => {
      if (!selectedTable || selectedDishes.length === 0 || !selectedChef) {
        alert("Please complete your reservation first 💡");
        return;
      }

      await addDoc(collection(db, "reservations"), {
        table: selectedTable,
        dishes: selectedDishes,
        servingChef: selectedChef,
        time: Date.now()
      });

      setShowSuccess(true);

      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }

    return (
        <>
            <div className="back-btn">
                <Link to='/'>
                    <RestaurantButton variant='ghost' size='lg' onclick={handleSubmit}>Go Back</RestaurantButton>
                </Link>
            </div>

            <div id="reservations-page">
                <h1>Customize your dining experience!</h1>
                <TableSelection selectedTable={selectedTable} setSelectedTable={setSelectedTable} />
                <DishSelection selectedDishes={selectedDishes} setSelectedDishes={setSelectedDishes} />
                <ChefSelection selectedChef={selectedChef} setSelectedChef={setSelectedChef}/>
                <RestaurantButton variant='primary' size='lg' onclick={handleSubmit}>Submit Request</RestaurantButton>
            </div>
            {showSuccess && (
              <div className="reservation-success-modal">
                <div className="modal-content">
                  <h2>🎉 Reservation Confirmed!</h2>
                  <p>We’re prepping your table. Redirecting to home...</p>
                </div>
              </div>
            )}
        </>
    );
}

export default Reservations;
