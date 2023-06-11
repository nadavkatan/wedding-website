import React, { useEffect, useContext, useState } from "react";
import "./styles/styles.css";
import { faq } from "../../data/data";
import InfoCard from "../../components/InfoCard/InfoCard";
import { LanguageContext } from "../../context/LanguageContext";
import useMediaQuery from "../../hooks/useMediaQuery";
import Drawer from "../../components/Drawer/Drawer";
import InfoBgRotated from "../../assets/images/info-bg-rotated.png";

export default function Info() {
  const { language } = useContext(LanguageContext);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [answerOpen, setAnswerOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set a timeout to enable the fade-in effect after a short delay
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 20);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  const handleOpenAnswer = () => {
    setAnswerOpen(!answerOpen);
  };
  return (
    <div
      className={`info-page-container fade-in ${fadeIn ? "active" : ""}`}
      style={{
        backgroundImage: isMobile
          ? `url(${InfoBgRotated})`
          : `url(${InfoBgRotated})`,
      }}
    >
      <h1>Information</h1>
      {isMobile ? <Drawer /> : null}
      {faq[language].map((info) => {
        return (
          <InfoCard
            key={info.id}
            info={info}
            lang={language}
            handleOpenAnswer={handleOpenAnswer}
          />
        );
      })}
    </div>
  );
}
