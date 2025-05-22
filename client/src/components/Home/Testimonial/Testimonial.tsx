import React from 'react';

import { useTranslation } from 'react-i18next';

import './Testimonial.sass';

const Testimonial: React.FC = () => {
  const { t } = useTranslation();
  return (
      <section id="testimonial">
          <blockquote>
            "{t("testimonial")}"
        <footer>- {t("testimonial_author")}</footer>
          </blockquote>
      </section>
  );
}

export default Testimonial;
