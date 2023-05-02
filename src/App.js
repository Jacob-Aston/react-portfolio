//  The App file puts the Header and Footer components together.
//  The pages are rendered within the Header.

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
