import React from "react";
import "../styles/Project.css";

export default function Project(props) {
  return (
    <ul>
      {props.projects.map((project) => (
        <div class="project-container" key={project.id}>
          <img class="project-image" src={project.image} alt=""></img>
          <div class="project-title">{project.title}</div>
          {project.deployed ? (
            <a class="project-deployed" href={project.deployed}>{project.deployedText}</a>
            ) : (
              <div></div>
            )}
          {project.repo ? (
            <a class="project-repo" href={project.repo}>{project.repoText}</a>
            ) : (
              <div></div>
            )}
        </div>
      ))}
    </ul>
  );
}
