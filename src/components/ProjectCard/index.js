import React from "react";
import "./style.css";

function ProjectCard(props) {
  const { title, data } = props;
  return (
    <div className="d-center">
      <h3 className="block-title" id="works">
        {title}
      </h3>
      <div className="pj-card-container">
        {data.map((p) => (
          <div className="pj-card">
            <a href={p.public_url}>
              <img src={p.img} alt={p.title} />
            </a>
            <span>{p.title}</span>
            <div className="pj-link">
              <a href={p.public_url}>
                {p.public_url ? "Visit website" : "Private site"}
              </a>
              {p.git_url && <a href={p.git_url}>View Github</a>}
            </div>
            <div className="pj-link">{p.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
