import React, { useState } from "react";
import "./style.css";

function ProjectCard(props) {
  const { title, data } = props;
  const [activeNum, setActiveNum] = useState(null);
  const handleOpen = (idx) => {
    if (activeNum === idx) {
      setActiveNum(null);
    } else {
      setActiveNum(idx);
    }
  };
  return (
    <div className="d-center">
      <h3 className="block-title" id="works">
        {title}
      </h3>
      <div className="pj-card-container">
        {data.map((p, idx) => (
          <div
            className="pj-card"
            key={idx}
            onMouseOver={() => {
              setActiveNum(idx);
            }}
            onMouseLeave={() => {
              setActiveNum(null);
            }}
          >
            <a href={p.public_url} target="_blank" rel="noreferrer noopener">
              <img src={p.img} alt={p.title} />
              {activeNum === idx && (
                <div
                  className="detailbox"
                  dangerouslySetInnerHTML={{ __html: p.desp }}
                ></div>
              )}
            </a>

            <span>{p.title}</span>
            <div className="pj-link">
              <a href={p.public_url} target="_blank" rel="noreferrer noopener">
                {p.public_url ? "Visit website" : "Private site"}
              </a>
              {p.git_url && (
                <a href={p.git_url} target="_blank" rel="noreferrer noopener">
                  View Github
                </a>
              )}
            </div>
            <div className="pj-link">{p.duration}</div>
            {p.type && <div className="pj-link">{p.type}</div>}
            <div className="mobileonly" onClick={() => handleOpen(idx)}>
              {activeNum === idx ? "關閉" : "展開細節"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
