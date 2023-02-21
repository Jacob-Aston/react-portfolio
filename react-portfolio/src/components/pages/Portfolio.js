import React from "react";
import Project from "../Project";

import projects from "../projects";

export default function Portfolio() {
    return (
        <Project projects={projects} />
    )
}