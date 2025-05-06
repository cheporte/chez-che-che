import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from '@components/Modal';
import './ChefSpotlight.sass';

type Chef = {
    name: string;
    bio: string;
    image: string;
    specialties: string[];
    socialLinks: string[];
};

type ChefSpotlightProps = {
    chefData: Chef;
};

const ChefSpotlight: React.FC<ChefSpotlightProps> = ({ chefData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="chef-spotlight">
            <div className="chef-card" onClick={handleClick}>
                <img src={chefData.image} alt={chefData.name} className="chef-image" />
                <h3>{chefData.name}</h3>
                <p>{chefData.specialties.join(', ')}</p>
            </div>
            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    <div className="chef-details">
                        <h2>{chefData.name}</h2>
                        <img src={chefData.image} alt={chefData.name} className="chef-modal-image" />
                        <p>
                            <FontAwesomeIcon icon={['fas', 'quote-left']} /> {chefData.bio}
                        </p>
                        <p><strong>Specialties:</strong> {chefData.specialties.join(', ')}</p>
                        <div className="chef-socials">
                            {chefData.socialLinks.map((link, index) => (
                                <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                                  {link.match("instagram") ? <FontAwesomeIcon icon={['fab', 'instagram']} /> : <FontAwesomeIcon icon={['fab', 'linkedin']} />}
                                </a>
                            ))}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ChefSpotlight;
