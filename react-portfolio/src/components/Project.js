import React from "react";

export default function Project(props) {
  return (
    <ul>
      {props.projects.map((project) => (
        <div key={project.id}>
          <img src={project.image} alt=""></img>
          <div class="project-title">{project.title}</div>
          <div class="project-deployed">{project.deployed}</div>
          <div class="project-repo">{project.repo}</div>
        </div>
      ))}
    </ul>
  );
}
