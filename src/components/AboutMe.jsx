import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/img/aboutmepic.jpg";
import "../App.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <nav className="about-nav">
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>  
          <li><Link to="/about">ABOUT</Link></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#works">WORKS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>

      <div className="image-section">
        <div className="image-background"></div>
        <img src={pic} alt="aboutprofile" className="profile-image" />
      </div>

      <div className="text-section">
        <h3 className="subheading">Who am I</h3>
        <h1 className="heading">
          HELLO <span className="highlight">.</span>
        </h1>
        <p className="description">
          My name is Zeinab Paraji Halipa, though I often go by Zei. I am a 24-year-old, 4th-year Bachelor of Science in Information Technology 
          student at Western Mindanao State University. With a passion for creativity and technology, I 
          aspire to become a skilled graphic designer. I am eager to embrace challenging opportunities that 
          enable me to enhance my skills, contribute meaningfully, and foster professional growth.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
