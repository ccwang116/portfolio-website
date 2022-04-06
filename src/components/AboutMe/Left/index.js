import React from "react";
import "../style.css";
import { overview } from "../../../data/overview";
function Left() {
  return (
    <div className="left">
      {overview.map((e, idx) => (
        <div key={`overview_${idx}`}>
          <h5>{e.title}</h5>
          <div>
            {e.title !== "Expertise" ? (
              e.content.map((item, index) => (
                <p key={`content_${index}`}>{item}</p>
              ))
            ) : (
              <p key={`content_Expertise`}>{e.content.join(", ")}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Left;
