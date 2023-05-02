//  The Navigation component contains a dropdown menu for mobile displays, or a row of buttons for page navigation on larger displays.
//  The dropdown design came from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar_click
//  The dropdown menu is displayed up until 740px.

import React from "react";
import "../styles/Navigation.css";

import { BiMenu } from "react-icons/bi";

function Navigation({ currentPage, handlePageChange }) {
  //  Toggles the dropdown menu visibility.
  const dropFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  };

  //  Closes the dropdown menu when clicking outside of the dropbtn.
  //  Either making a selection or clicking off the dropdown menu close the overlay.
  //  The dropbtn already runs the dropFunction to toggle the dropdown menu so it is excluded by the if statement.
  const handleClickOutside = (event) => {
    if (!event.target.matches(".dropbtn")) {
      const myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
      }
    }
  };

  /*  Note that we removed the window.onclick function and replaced it with React.useEffect to add and remove an event listener for the click event. 
    This ensures that the handleClickOutside function is only executed when the component is mounted and unmounted, avoiding any potential performance issues.
    -ChatGPT */
  React.useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      {/* The dropdown div is hidden above 740px page width. */}
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
      {/* The nav-row div gets displayed above 740px page width.  */}
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
