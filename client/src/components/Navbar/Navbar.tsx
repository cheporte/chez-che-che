import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { UserRound } from "lucide-react";

// import RestaurantButton from "@components/RestaurantButton";
import LanguageSwitcher from "@components/LanguageSwitcher";

import './Navbar.sass';
import { getAuth } from "firebase/auth";
import { logoutUser } from "../../firebase/authService";


const Navbar: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const user = getAuth().currentUser;

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  const handleNavigationToProfile = () => {
    navigate(`/profile/${user?.uid}`);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div id="navbar">
      <div className="nav-links">
        <Link to="/menu">{t("navbar_menu")}</Link>
        <Link to="/chefs">{t("navbar_chefs")}</Link>
        <Link to="/about">{t("navbar_about")}</Link>
      </div>
      <div className="right-side" ref={dropdownRef}>
        <LanguageSwitcher />
        {user && (
          <div className="user-profile" onClick={() => setDropdownOpen((prev) => !prev)}>
            <UserRound size={48} color="white" />
            {dropdownOpen && (
              <div className="dropdown-menu" onClick={() => setDropdownOpen(false)}>
                <button onClick={handleNavigationToProfile}>{t("navbar_profile")}</button>
                <button onClick={handleLogout}>{t("navbar_logout")}</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
