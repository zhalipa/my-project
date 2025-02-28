import React from "react";
import { Link } from "react-router-dom"; 
import "../App.css";
import floatingImage from "../assets/img/mee.jpeg"; 

function Hero() {
  return (
    <div className="hero-container">
      <header className="header">
        <nav className="navbar">
          <span className="logo">My Portfolio</span>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><Link to="/about">About</Link></li> 
            <li><a href="#works">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
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
