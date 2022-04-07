import React from "react";
import "../style.css";

function SocialMedia() {
  return (
    <div className="social-media">
      <a
        href="https://www.facebook.com/profile.php?id=100002118816826"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/facebook-square-brands.svg" alt="fb"></img>{" "}
      </a>
      <a href="https://github.com/ccwang116/" target="_blank" rel="noreferrer">
        <img src="/images/github-square-brands.svg" alt="github"></img>{" "}
      </a>
    </div>
  );
}

export default SocialMedia;
