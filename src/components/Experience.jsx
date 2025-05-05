import React from 'react';
import Navbar from './navbar';
import '../App.css';

const ExperiencePage = () => {
  return (
    <div className="experience-page">
      <Navbar />
      <h1 className="experience-title">My Experience</h1>
      <p className="experience-subtitle">Work and internship highlights</p>

      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
