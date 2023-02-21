import React from "react";

export default function Project(props) {
  return (
    <ul>
      {props.projects.map((project) => (
        <div key={project.id}>
          <div>{project.title}</div>
          <div>{project.deployed}</div>
          <div>{project.repo}</div>
        </div>
      ))}
    </ul>
  );
}
