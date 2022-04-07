import React from "react";
import "./style.css";
import { advantage } from "../../data/advantage";

function Advantage() {
  return (
    <div className="advantage d-center">
      <h3 className="block-title">My Advantage</h3>
      <div className="logo-card-container mb-large">
        {advantage.map((e) => (
          <div key={e.title} className="logo-card">
            <img src={e.image} alt={e.title} />
            <span>{e.title}</span>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Advantage;
