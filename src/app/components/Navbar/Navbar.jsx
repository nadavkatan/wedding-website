import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { navbarItems } from "../../data/data";
import NavbarItem from "../NavbarItem/NavbarItem";
import "./styles/styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar-items-container">
        {navbarItems.map((navbarItem) => {
          return <NavbarItem key={navbarItem.id} item={navbarItem} />;
        })}
      </div>
      <div className="navbar-logo">
        <div className="languages">
          <p
            style={{ color: language === "en" ? "black" : "#6D5D6E" }}
            onClick={() => handleLanguageChange("en")}
          >
            en
          </p>
          <p>/</p>
          <p
            style={{ color: language === "heb" ? "black" : "#6D5D6E" }}
            onClick={() => handleLanguageChange("heb")}
          >
            עברית
          </p>
        </div>
        <Link to="/">
          <img
            src="https://wedsites.s3.amazonaws.com/accounts/3812/header/1037/branding-1614172984.png"
            alt="heart"
          />
        </Link>
      </div>
    </div>
  );
}
