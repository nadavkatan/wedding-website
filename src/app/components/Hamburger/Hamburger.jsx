import React, { useState } from "react";
import "./styles/styles.scss";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // toggleDrawer();
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={`hamburger ${isOpen ? "open" : ""}`}
      onClick={handleClick}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
};

export default Hamburger;
