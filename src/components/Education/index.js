import React from "react";
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
          <div key={e.type}>
            <div className="small-year">{e.year}</div>

            {e.content.map((ele) => (
              <div className="single-item" key={ele.firm}>
                <div className="job-title">{ele.title}</div>
                <span className="firm">{ele.firm},</span>
                <span className="duration"> {ele.duration}</span>
              </div>
            ))}
          </div>
        ))}
        <div className="my_photo">
          <img
            src="https://scontent.ftpe8-1.fna.fbcdn.net/v/t1.18169-9/13427916_1057056207708330_7613742606727115720_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=rVg_d-fR_twAX_kJsdp&_nc_ht=scontent.ftpe8-1.fna&oh=00_AT8DHQfFG9_NM3CKXCcCMx1ugwh8POkTGsuploWokQwEgA&oe=628628C4"
            alt="a cat"
          ></img>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Education;
