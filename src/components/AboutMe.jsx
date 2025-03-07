import React from "react";
import pic from "../assets/img/mee.jpeg";
import "../App.css";
import Navbar from "./navbar";

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <header className="header">
        <Navbar />
      </header>

      <div className="aboutme-section">
        <div className="content">
          <img src={pic} alt="About Me - Portrait" className="about-image" />
          <div className="text-content">
            <h1>
              Hello.
            </h1>
            <p>
              My name is <strong>Zeinab Paraji Halipa</strong>, though I 
              often go by Zei. I am a 24-year-old, 4th-year Bachelor of 
              Science in Information Technology student at Western Mindanao State 
              University. With a passion for creativity and technology, I aspire 
              to become a skilled graphic designer.
            </p>
            <p className="sub-text">
              My projects combine cultural, artistic, and professional elements. They feature 
              vibrant festive decorations and creative portraits blending nature with human 
              elements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;