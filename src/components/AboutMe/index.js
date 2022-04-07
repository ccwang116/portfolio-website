import React from "react";
import Left from "./Left";
import Right from "./Right";
import "./style.css";

function AboutMe() {
  return (
    <div className="about_box">
      <Left />
      <div className="my_photo">
        <img src="https://avatars.githubusercontent.com/u/66878095?v=4"></img>
      </div>
      <Right />
    </div>
  );
}

export default AboutMe;
