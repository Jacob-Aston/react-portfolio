import React from "react";

import "../../styles/Resume.css";

export default function Resume() {
  return (
    <div className="resume-page">
      <h2>Resume</h2>
      <div className="resume-container">
        <div className="resume-experience">
          <p>
            This is a link to my previous work experience. It's not tech related
            but I learned how to work hard to support my team.
          </p>
          <a
            className="resume"
            href="https://docs.google.com/document/d/15glYOBtjn69N-r6MAXLW3JROV8M4GcMigGGyeDuWnaQ/edit?usp=sharing"
          >
            My Resume
          </a>
          <hr></hr>
        </div>
        <div className="program-experience">
          <p>
            Along with my previous work experience. This is a list of what we
            covered in my programming course.
          </p>
          <ul className="skill-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Web APIs</li>
            <li>Third Party APIs</li>
            <li>Server Side APIs</li>
            <li>NodeJS</li>
            <li>Object Oriented Programming</li>
            <li>Express</li>
            <li>SQL</li>
            <li>ORM</li>
            <li>MVC</li>
            <li>CS</li>
            <li>NoSQL</li>
            <li>PWA</li>
            <li>React</li>
            <li>MERN</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
