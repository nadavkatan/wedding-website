import React, { useEffect, useRef, useState } from "react";
import TriangleDown from "../../assets/icons/triangle-down.svg";
import TriangleUp from "../../assets/icons/triangle-up.svg";
import "./styles/styles.scss";

export default function ShuttleCard({ shuttle }) {
  // const direction = lang === "heb" ? "rtl" : "ltr";
  const [isListOpen, setIsListOpen] = useState(false);
  const listRef = useRef(null);

  const handleToggleAnswer = () => {
    setIsListOpen(!isListOpen);
    if (!isListOpen) {
      scrollIntoView();
    }
  };

  const scrollIntoView = () => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getHeight = () => {
    return isListOpen ? `${listRef.current.scrollHeight}px` : "0";
  };

  return (
    <div className="shuttle-card-container">
      <h2>{shuttle.direction}</h2>
      <div className="departure-time">
        <h3>{shuttle.departureTime}</h3>
        <div
          className={`toggle-arrow ${isListOpen ? "open" : ""}`}
          onClick={handleToggleAnswer}
        >
          <img
            className="triangle-icon"
            src={isListOpen ? TriangleUp : TriangleDown}
            alt="triangle"
          />
        </div>
      </div>

      <div className="guets-list" ref={listRef} style={{ height: getHeight() }}>
        <ul>
          {shuttle.guests.map((guest) => {
            return <li key={guest}>{guest}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
