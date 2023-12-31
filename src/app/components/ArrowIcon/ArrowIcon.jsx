import React from "react";
import "./styles/styles.css";

export default function ArrowIcon({ direction }) {
  return (
    <div className="icon-container">
      <h3>{direction === "left" ? "<" : ">"}</h3>
    </div>
  );
}
