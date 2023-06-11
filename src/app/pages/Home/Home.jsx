import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import weddingBg from "../../assets/images/wedding-bg.svg";
import rotatedBg from "../../assets/images/wedding-bg-rotated2.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import useScrollNavigation from "../../hooks/useScrollNavigation";
import Hamburger from "../../components/Hamburger/Hamburger";
import Drawer from "../../components/Drawer/Drawer";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set a timeout to enable the fade-in effect after a short delay
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 20);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`home fade-in ${fadeIn ? "active" : ""}`}
      style={{
        backgroundImage: isMobile ? `url(${rotatedBg})` : `url(${weddingBg})`,
      }}
    >
      {isMobile ? <Drawer /> : null}
      <section className="home-content">
        {isMobile ? (
          <div className="home-mobile-heading">
            <h1>Shira</h1>
            <h1>&</h1>
            <h1>Nadav</h1>
          </div>
        ) : (
          <h1>Shira & Nadav</h1>
        )}
        <h2 className="date">14.07.2023</h2>
      </section>
    </div>
  );
}
