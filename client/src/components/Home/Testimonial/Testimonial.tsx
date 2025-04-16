import React from 'react';

import './Testimonial.sass';

const Testimonial: React.FC = () => {
    return (
        <section id="testimonial">
            <blockquote>
              "A culinary journey that touches the soul. Every bite is a story."
              <footer>- Happy Customer</footer>
            </blockquote>
        </section>
    );
}

export default Testimonial;