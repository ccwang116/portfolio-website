import React from "react";
import "./style.css";
import { projects } from "../../data/projects";

function MyProject() {
  return (
    <div className="d-center">
      <h3 className="block-title" id="works">
        My Project
      </h3>
      <div className="pj-card-container">
        {projects.map((p) => (
          <div className="pj-card">
            <a href={p.public_url}>
              <img src={p.img} alt={p.title} />
            </a>
            <span>{p.title}</span>
            <div className="pj-link">
              <a href={p.public_url}>Visit website</a>
              <a href={p.git_url}>View Github</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProject;
