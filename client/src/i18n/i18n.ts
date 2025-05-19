import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from './locales/en.json';
import uk from './locales/uk.json';
import fr from './locales/fr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      uk: { translation: uk },
    },
  });

export default i18n;
