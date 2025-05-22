import React from 'react';

import './AboutIntro.sass';

import { useTranslation } from 'react-i18next';

const AboutIntro: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="about-intro">
            <h1>{t("about_title")}</h1>
            <p>{t("about_description")}</p>
            <div className="intro-divider" />
        </section>
    );
}

export default AboutIntro;