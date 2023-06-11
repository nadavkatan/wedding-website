import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/styles.scss";
import TriangleDown from "../../assets/icons/triangle-down.svg";
import TriangleUp from "../../assets/icons/triangle-up.svg";
import { ReactComponent as Icon } from "../../assets/icons/triangle-down.svg";

export default function InfoCard({ info, lang, handleOpenAnswer }) {
  const direction = lang === "heb" ? "rtl" : "ltr";
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const answerRef = useRef(null);

  const handleToggleAnswer = () => {
    setIsAnswerOpen(!isAnswerOpen);
    handleOpenAnswer();
    if (!isAnswerOpen) {
      scrollIntoView();
    }
  };

  const scrollIntoView = () => {
    answerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getHeight = () => {
    return isAnswerOpen ? `${answerRef.current.scrollHeight}px` : "0";
  };

  return (
    <div className="card-container">
      <div className="question">
        <h2 style={{ direction }}>{info.question}</h2>
        <div
          className={`toggle-arrow ${isAnswerOpen ? "open" : ""}`}
          onClick={handleToggleAnswer}
        >
          <img
            className="triangle-icon"
            src={isAnswerOpen ? TriangleUp : TriangleDown}
            alt="triangle"
          />
        </div>
      </div>
      <div ref={answerRef} className={`answer`} style={{ height: getHeight() }}>
        <p style={{ direction }}>
          {info.answer}{" "}
          {info.redirect.length ? (
            <Link to={info.redirect}>{info.redirectText}</Link>
          ) : null}{" "}
          {info.extraText.length ? info.extraText : null}
        </p>
      </div>
    </div>
  );
}
