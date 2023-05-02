//  This component contains the main header, Navigation component, and renders the current page.

import React, { useState } from "react";
import Navigation from "./Navigation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import "../styles/Header.css";

//  The currentPage state contains which page should be rendered.
//  The renderPage function returns a page element matching currentPage.
//  The handlePageChange function changes the currentPage state.
//  currentPage and handlePageChange are use in the Navigation component.
export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="header-container">
        <h1>Jacob Aston</h1>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
      {renderPage()}
    </div>
  );
}
