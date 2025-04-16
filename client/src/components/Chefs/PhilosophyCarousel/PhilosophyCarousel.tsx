import React, { useState } from 'react';
import './PhilosophyCarousel.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { philosophies } from '@data/philosophyData';

const PhilosophyCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((index + 1) % philosophies.length);
  const handlePrev = () => setIndex((index - 1 + philosophies.length) % philosophies.length);

  return (
    <div className="philosophy-carousel">
      <div className="quote-box">
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon left" />
        <p className="quote">{philosophies[index].quote}</p>
        <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right" />
        <p className="author">— {philosophies[index].author}</p>
      </div>
      <div className="controls">
        <button onClick={handlePrev}>‹</button>
        <button onClick={handleNext}>›</button>
      </div>
    </div>
  );
};

export default PhilosophyCarousel;
