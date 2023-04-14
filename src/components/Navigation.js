import React from "react";
import "../styles/Navigation.css";

function Navigation({ currentPage, handlePageChange }) {
const dropFunction = () => {

}
  return (
    <div>
      <div className="dropdown">
        <button className="dropbtn" onClick={dropFunction}>---</button>
        <div className="dropdown-content" id="myDropdown">
          <button>About Me</button>
          <button>Portfolio</button>
          <button>Contact</button>
          <button>Resume</button>
        </div>
      </div>
      <ul className="nav">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </ul>
    </div>
  );
}

export default Navigation;
