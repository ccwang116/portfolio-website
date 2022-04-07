import React from "react";
import "./style.css";

function MyProject() {
  return (
    <div className="d-center">
      <h3 className="block-title" id="works">
        My Project
      </h3>
      <div className="pj-card-container">
        <div className="pj-card">
          <a href="/#">
            <img
              src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
              alt="pj-img"
            />
          </a>
          <span>title</span>
          <div className="pj-link">
            <a href="/#">Visit website</a>
            <a href="/#">View Github</a>
          </div>
        </div>
        <div className="pj-card">
          <a href="/#">
            <img
              src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
              alt="pj-img"
            />
          </a>
          <span>title</span>
          <div className="pj-link">
            <a href="/#">Visit website</a>
            <a href="/#">View Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProject;
