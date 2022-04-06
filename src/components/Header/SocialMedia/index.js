import React from "react";
import "../style.css";

function SocialMedia() {
  return (
    <div className="social-media">
      <a
        href="https://www.facebook.com/profile.php?id=100002118816826"
        target="_blank"
      >
        <img src="/images/facebook-square-brands.svg"></img>{" "}
      </a>
      <a href="https://github.com/ccwang116/" target="_blank">
        <img src="/images/github-square-brands.svg"></img>{" "}
      </a>
    </div>
  );
}

export default SocialMedia;
