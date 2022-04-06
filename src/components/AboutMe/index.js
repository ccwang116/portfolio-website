import React from "react";
import Left from "./Left";
import Right from "./Right";
import "./style.css";

function AboutMe() {
  return (
    <div className="about_box">
      <Left />
      <div className="my_photo">
        <img src="https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60"></img>
      </div>
      <Right />
    </div>
  );
}

export default AboutMe;
