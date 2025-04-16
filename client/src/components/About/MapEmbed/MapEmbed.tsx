import React from 'react';

import './MapEmbed.sass';

const MapEmbed: React.FC = () => {
    return (
        <section className="map-section">
            <h2>Find Us Here</h2>
            <div className="map-container">
              <iframe
                title="Chez Ché-Ché Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999999999995!2d2.292292615674794!3d48.85884497928785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fce1e90abbd%3A0x9a45cb0d81e4b5ce!2sTour%20Eiffel!5e0!3m2!1sen!2sfr!4v1616175234285!5m2!1sen!2sfr"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
    );
}

export default MapEmbed;