import React from "react";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

import './LanguageSwitcher.sass';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  }

  return (
    <select value={i18n.language} onChange={handleChange} className="lang-switcher">
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="uk">Українська</option>
    </select>
  );
};

export default LanguageSwitcher;
