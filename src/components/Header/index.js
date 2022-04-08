import React from "react";
import "./style.css";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";
function Header() {
  return (
    <div className="header">
      <Contact />
      <div className="header-logo">
        <img src={"/images/logo.svg"} alt="logo" />
      </div>
      <SocialMedia />
    </div>
  );
}

export default Header;
