import React, { useState } from 'react';

import './ChefCard.sass';

type ChefCardProps = {
    name: string;
    role: string;
    photo: string;
    shortBio: string;
    fullBio?: string;
    signatureDishes?: string[];
}

const ChefCard: React.FC<ChefCardProps> = ({
        name, role, photo, shortBio, fullBio, signatureDishes
    }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='chef-card' onClick={() => setIsOpen(true)}>
                <img src={photo} alt={name} />
                <div className='chef-info'>
                    <h2>{name}</h2>
                    <h3>{role}</h3>
                    <p>{shortBio}</p>
                </div>
            </div>

            {isOpen && (
                <div className="chef-modal-overlay" onClick={() => setIsOpen(false)}>
                  <div className="chef-modal" onClick={e => e.stopPropagation()}>
                    <button className="close-button" onClick={() => setIsOpen(false)}>&times;</button>
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