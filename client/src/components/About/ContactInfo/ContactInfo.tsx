import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faClock } from '@fortawesome/free-solid-svg-icons';

import './ContactInfo.sass';
import { useTranslation } from 'react-i18next';

const ContactInfo: React.FC = () => {
  const { t } = useTranslation();  
  return (
      <section className="contact-info">
          <h2>{t("about_contact_us")}</h2>
          <div className="info-box">
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>123 Rue de la Lumière, Paris, France</p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <p>+33 1 23 45 67 89</p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faClock} />
              <p>Mon–Sun: 17:00 – 23:00</p>
            </div>
          </div>
    </section>
  );
}

export default ContactInfo;