import React from "react";
import "./style.css";
import { advantage } from "../../data/advantage";

function Advantage() {
  return (
    <div className="advantage d-center">
      <h3 className="block-title">My Advantage</h3>
      <div className="logo-card-container mb-large">
        {advantage.map((e) => (
          <div className="logo-card">
            <img src={e.image} />
            <span>{e.title}</span>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Advantage;
