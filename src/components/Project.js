import React from "react";
import "../styles/Project.css";

export default function Project(props) {
  return (
    <ul>
      {props.projects.map((project) => (
        <div className="project-container" key={project.id}>
          <img className="project-image" src={project.image} alt=""></img>
          <div className="project-title">{project.title}</div>
          {project.deployed ? (
            <a className="project-deployed" href={project.deployed}>{project.deployedText}</a>
            ) : (
              <div></div>
            )}
          {project.repo ? (
            <a className="project-repo" href={project.repo}>{project.repoText}</a>
            ) : (
              <div></div>
            )}
        </div>
      ))}
    </ul>
  );
}
