import React from "react";
import "../styles/Project.css";

export default function Project(props) {
  return (
    <ul>
      {props.projects.map((project) => (
        <div className="project-container" key={project.id}>
          <div className="image-container">
            <img className="project-image" src={project.image} alt=""></img>
            <div className="project-title">{project.title}</div>
          </div>
          <div className="link-container">
            {project.linkOne ? (
              <a className="project-link" href={project.linkOne}>
                {project.linkOneText}
              </a>
            ) : (
              <div></div>
            )}
            {project.linkTwo ? (
              <a className="project-link" href={project.linkTwo}>
                {project.linkTwoText}
              </a>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ))}
    </ul>
  );
}
