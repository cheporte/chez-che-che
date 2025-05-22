import React from 'react';
import './Hero.sass';

import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
        <section id='hero'>
            <img className='hero__logo' src='/logo-pinkish.png' alt="Chez Ché-Ché Logo" />
            <h1>{t("hero_title")}</h1>
            <h2>{t("hero_subtitle")}</h2>
            <p className='hero__welcome'>{ t("hero_main_text") }</p>
        </section>
    );
}

export default Hero;
