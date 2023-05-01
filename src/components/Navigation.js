import React from "react";
import "../styles/Navigation.css";

import { BiMenu } from "react-icons/bi";

function Navigation({ currentPage, handlePageChange }) {
  const dropFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  };

  const handleClickOutside = (event) => {
    if (!event.target.matches(".dropbtn")) {
      const myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
      }
    }
  };

  /*Note that we removed the window.onclick function and replaced it with React.useEffect to add and remove an event listener for the click event. This ensures that the handleClickOutside function is only executed when the component is mounted and unmounted, avoiding any potential performance issues. */
  React.useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className="dropdown">
        <button className="dropbtn" onClick={dropFunction}>
          <span>
            <BiMenu
              onClick={(event) => {
                event.stopPropagation();
                dropFunction();
              }}
            />
          </span>
        </button>
        <ul className="dropdown-content" id="myDropdown">
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
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </ul>
      </div>
      <ul className="nav-row">
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
    </nav>
  );
}

export default Navigation;
