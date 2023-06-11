import React, { useEffect, useState } from "react";
import ScheduleMobile from "../../assets/images/schedule-mobile.png";
import "./styles/styles.scss";

import useMediaQuery from "../../hooks/useMediaQuery";
import Drawer from "../../components/Drawer/Drawer";
export default function Schedule() {
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
    <>
      {isMobile ? <Drawer /> : null}
      <div
        className={`schedule-page-container fade-in ${fadeIn ? "active" : ""}`}
        style={{
          backgroundImage: isMobile
            ? `url(${ScheduleMobile})`
            : `url(${ScheduleMobile})`,
        }}
      />
    </>
  );
}
