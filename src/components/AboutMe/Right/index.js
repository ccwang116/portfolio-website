import React from "react";
import "../style.css";
import { accomplishment } from "../../../data/accomplishment";
function Right() {
  return (
    <div className="right">
      {accomplishment.map((e, idx) => (
        <div key={`overview_${idx}`}>
          <h5>{e.title}</h5>
          <div className="right_number">
            {e.content}
            <span>+</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Right;
