import React from "react";
import "./style.css";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";

function Header() {
  return (
    <div className="header">
      <Contact />
      <div>logo</div>
      <SocialMedia />
    </div>
  );
}

export default Header;
