import React from "react";
import "./Logo.css";
import burgerLogo from "../../assets/images/logo.png";

export default function Logo(props) {
  return (
    <div className="Logo">
      <img src={burgerLogo} alt="burger logo" />
    </div>
  );
}
