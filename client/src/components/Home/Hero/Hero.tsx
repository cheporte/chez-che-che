import React from 'react';
import './Hero.sass';

const Hero: React.FC = () => {
    return (
        <section id='hero'>
            <img className='hero__logo' src='/chez-che-che/logo-pinkish.png' alt="Chez Ché-Ché Logo" />
            <h1>Bienvenue to Chez Ché-Ché</h1>
            <h2>Where Every Bite Whispers a Story</h2>
            <p className='hero__welcome'>
                Step into a world of refined flavors and intimate charm.
                At Chez Ché-Ché, we blend timeless culinary traditions with a touch of whimsy,
                crafting dishes that nourish both body and soul. Whether you're joining us
                for a romantic evening, a joyful gathering, or a quiet moment of indulgence — you're always home here.
                Let your senses wander. Let your heart dine.
            </p>
        </section>
    );
}

export default Hero;