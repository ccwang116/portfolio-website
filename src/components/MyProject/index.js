import React from "react";
import "./style.css";
import ProjectCard from "../ProjectCard";
import { myProjects, partiProjects } from "../../data/projects";

function MyProject() {
  return (
    <div>
      <ProjectCard title="Participated Project" data={partiProjects} />
      <ProjectCard title="My Project" data={myProjects} />
    </div>
  );
}

export default MyProject;
