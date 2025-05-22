import React from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { UserRound } from "lucide-react";

// import RestaurantButton from "@components/RestaurantButton";
import LanguageSwitcher from "@components/LanguageSwitcher";

import './Navbar.sass';


const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id='navbar'>
      <div className="nav-links">
        <Link to='/menu'>{t("navbar_menu")}</Link>
        <Link to='/chefs'>{t("navbar_chefs")}</Link>
        <Link to='/about'>{t("navbar_about")}</Link>
      </div>
      <div className="right-side">
        <LanguageSwitcher />
        <div className="user-profile">
          <UserRound size={48} color="white" />
        </div>
      </div>

    </div>
  );
}

export default Navbar;
