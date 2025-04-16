import React from 'react';

import './AboutIntro.sass';

const AboutIntro: React.FC = () => {
    return (
        <section className="about-intro">
            <h1>About Chez Ché-Ché</h1>
            <p>
                At Chez Ché-Ché, we believe food is more than a meal — it’s a moment.
                Our restaurant celebrates refined French cuisine with a playful heart,
                offering dishes that nourish both body and soul. Whether it’s your first
                visit or your fiftieth, we invite you to indulge in a space where every
                bite tells a story.
            </p>
            <div className="intro-divider" />
        </section>
    );
}

export default AboutIntro;