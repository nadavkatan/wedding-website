import React, { useEffect, useState } from "react";
import Drawer from "../../components/Drawer/Drawer";
import useMediaQuery from "../../hooks/useMediaQuery";
import ShuttleCard from "../../components/ShuttleCard/ShuttleCard";
import { shuttlesList } from "../../data/data";
import "./styles/styles.scss";
import InfoBgRotated from "../../assets/images/info-bg-rotated.png";

export default function Shuttles() {
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
      className={`shuttles-page-container fade-in ${fadeIn ? "active" : ""}`}
      style={{
        backgroundImage: isMobile
          ? `url(${InfoBgRotated})`
          : `url(${InfoBgRotated})`,
      }}
    >
      {isMobile ? <Drawer /> : null}
      <h1 className="shuttles-title">Shuttles</h1>
      <div className="shuttles-container">
        {shuttlesList.map((shuttle) => {
          return <ShuttleCard key={shuttle.id} shuttle={shuttle} />;
        })}
      </div>
    </div>
  );
}
