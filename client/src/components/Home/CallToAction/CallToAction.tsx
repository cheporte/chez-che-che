import React from 'react';
import { Link } from 'react-router-dom';

import RestaurantButton from '@components/RestaurantButton';
import './CallToAction.sass';

import { useTranslation } from 'react-i18next';

const CallToAction: React.FC = () => {
  const { t } = useTranslation();
  return (
      <section id="cta">
          <h2>{t("cta_title")}</h2>
          <Link to="/reservations">
              <RestaurantButton variant='ghost' size='lg'>
                  {t("cta_book_table_btn")}
              </RestaurantButton>
          </Link>
          <h2>{t("cta_or")}</h2>
          <Link to="/about">
              <RestaurantButton variant='ghost' size='lg'>
                  {t("cta_read_more_btn")}
              </RestaurantButton>
          </Link>
      </section>
  );
}

export default CallToAction;
