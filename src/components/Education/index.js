import React, { Fragment } from "react";
import "./style.css";
import { experience } from "../../data/experience";

function Education() {
  return (
    <div className="d-center">
      <h3 className="block-title" id="experience">
        My Education & Experience
      </h3>
      <div className="ed-container">
        {experience.map((e) => (
          <div>
            <div className="small-year">{e.year}</div>

            {e.content.map((ele) => (
              <div className="single-item">
                <div className="job-title">{ele.title}</div>
                <span className="firm">{ele.firm},</span>
                <span className="duration"> {ele.duration}</span>
              </div>
            ))}
          </div>
        ))}
        <div className="my_photo">
          <img src="https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60"></img>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Education;
