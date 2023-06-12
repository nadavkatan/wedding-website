import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import weddingBg from "../../assets/images/wedding-bg.svg";
import rotatedBg from "../../assets/images/wedding-bg-rotated2.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import Drawer from "../../components/Drawer/Drawer";
import ShiraNadav from "../../assets/images/shira-nadav.png";

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
      <section className="home-greeting-container">
        {/* <h1 className="title">We are getting married!</h1> */}
        <p className="greeting">
          We are delighted to have you as a guest at our special day, and we
          can't wait to welcome you in Evia, Greece, where we will celebrate our
          love.
        </p>
        <p className="greeting">
          In this website you will find practical information that will help you
          to plan your trip. Do not hesitate to reach out to us for any
          questions that may come up!
        </p>
        <div className="img-container">
          <img src={ShiraNadav} alt="shira and nadav" />
        </div>
      </section>
    </div>
  );
}
