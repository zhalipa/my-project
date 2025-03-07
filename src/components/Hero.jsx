import React from "react";
import "../App.css";
import floatingImage from "../assets/img/mee.jpeg"; 
import Navbar from "./navbar";

function Hero() {
  return (
    <div className="hero-container">
      <header className="header">
        <Navbar />
      </header>

      <div className="hero-section">
        <h1 className="hero-text">
          “Designing the Future, <br /> One Pixel at a Time”
        </h1>
      </div>

      <img src={floatingImage} alt="Floating Graphic" className="floating-image" />
    </div>
  );
}

export default Hero;