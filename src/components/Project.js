import React from "react";
import "../styles/Project.css";

export default function Project(props) {
  return (
    <ul>
      {props.projects.map((project) => (
        <div class="project-container" key={project.id}>
          <img class="project-image" src={project.image} alt=""></img>
          <div class="project-title">{project.title}</div>
          <div class="project-deployed">{project.deployed}</div>
          <div class="project-repo">{project.repo}</div>
        </div>
      ))}
    </ul>
  );
}
