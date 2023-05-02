//  The portfolio page renders the Project component.
//  The Portfolio page and Project JSX and CSS are handled in Project.js and Project.css.

import React from "react";
import Project from "../Project";

import projects from "../projectList";

export default function Portfolio() {
  return <Project projects={projects} />;
}
