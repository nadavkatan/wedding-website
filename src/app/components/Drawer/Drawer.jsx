import React, { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import "./styles/styles.css";
import { navbarItems } from "../../data/data";
import NavbarItem from "../NavbarItem/NavbarItem";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`drawer ${isOpen ? "open-drawer" : ""}`}>
      <div className="drawer-content">
        <div className="navbar-items">
          {navbarItems.map((navbarItem) => {
            return <NavbarItem key={navbarItem.id} item={navbarItem} />;
          })}
        </div>
      </div>
      <div onClick={toggleDrawer}>
        <Hamburger />
      </div>
    </div>
  );
};

export default Drawer;
