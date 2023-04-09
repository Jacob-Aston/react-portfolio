import React from "react";
import Project from "../Project";

import projects from "../projectList";

export default function Portfolio() {
  return <Project projects={projects} />;
}
