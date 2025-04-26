import React, { useState, useEffect } from 'react';
import './ChefCard.sass';

type ChefCardProps = {
  name: string;
  role: string;
  photo: string;
  shortBio: string;
  fullBio?: string;
  signatureDishes?: string[];
};

const ChefCard: React.FC<ChefCardProps> = ({
  name, role, photo, shortBio, fullBio, signatureDishes
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsMounted(true);
    setTimeout(() => setIsVisible(true), 20); // little gap so transition can happen
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsMounted(false), 300); // match your transition time
  };

  useEffect(() => {
    if (isMounted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMounted]);

  return (
    <>
      <div className='chef-card' onClick={openModal}>
        <img src={photo} alt={name} />
        <div className='chef-info'>
          <h2>{name}</h2>
          <h3>{role}</h3>
          <p>{shortBio}</p>
        </div>
      </div>

      {isMounted && (
        <div
          className={`chef-modal-overlay ${isVisible ? 'visible' : ''}`}
          onClick={closeModal}
        >
          <div
            className={`chef-modal ${isVisible ? 'visible' : ''}`}
            onClick={e => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={photo} alt={name} />
            <h2>{name}</h2>
            <h3>{role}</h3>
            <p>{fullBio}</p>
            {signatureDishes && (
              <>
                <h4>Signature Dishes</h4>
                <ul>
                  {signatureDishes.map((dish, i) => (
                    <li key={i}>{dish}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChefCard;
