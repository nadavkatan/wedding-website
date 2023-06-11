import React from "react";
import "./styles/styles.scss";
import { Link } from "react-router-dom";

export default function NavbarItem({ item }) {
  return (
    <div className="navbar-item">
      <Link to={item.route}>{item.name}</Link>
    </div>
  );
}
