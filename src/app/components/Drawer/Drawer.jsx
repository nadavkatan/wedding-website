import React, { useContext, useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import "./styles/styles.css";
import { navbarItems } from "../../data/data";
import NavbarItem from "../NavbarItem/NavbarItem";
import { LanguageContext } from "../../context/LanguageContext";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`drawer ${isOpen ? "open-drawer" : ""}`}>
      <div className="drawer-content">
        <div className="languages">
          <p
            style={{ color: language === "en" ? "#c4a365" : "black" }}
            onClick={() => handleLanguageChange("en")}
          >
            en
          </p>
          <p>/</p>
          <p
            style={{ color: language === "heb" ? "#c4a365" : "black" }}
            onClick={() => handleLanguageChange("heb")}
          >
            עברית
          </p>
        </div>
        <div className="navbar-items">
          {language
            ? navbarItems[language].map((navbarItem) => {
                return <NavbarItem key={navbarItem.id} item={navbarItem} />;
              })
            : null}
        </div>
      </div>
      <div onClick={toggleDrawer}>
        <Hamburger />
      </div>
    </div>
  );
};

export default Drawer;
