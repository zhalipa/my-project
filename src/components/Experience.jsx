import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCode, FaChartLine } from 'react-icons/fa';
import './Experience.css'; 
import Navbar from './navbar';


const Experience = () => {
  const workExperience = [
    {
      id: 1,
      role: "System Analyst",
      company: "Innoventure",
      duration: "2023 - Present",
      resp: "Responsibilities:",
      responsibilities: [
        "Document functional and non-functional requirements",
        "Analyze gaps between current systems and business goals",
        "Maintain system specs, user manuals, and compliance records",
        "Design technical solutions to meet business requirements."
      ],
      icon: <FaCode />
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Information Technology",
      institution: "Western Mindanao State University",
      year: "2021-2025",
      highlights: [
        "Specialized in Human-Computer Interaction",
        "Thesis on 'Ayala National High School Senior High School Learning Management System'",
      ],
      icon: <FaGraduationCap />
    }
  ];

  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 70 },
    { name: "Agile Methodologies", level: 80 }
  ];

  return (
    <div className="experience-page">
      <Navbar />
      <header className="experience-header">
        <h1>My Professional Journey</h1>
        <p className="subtitle">Work experience, education, and skills I've acquired along the way</p>
      </header>

      <section className="experience-section">
        <h2><FaBriefcase /> Experience</h2>
        <div className="timeline">
          {workExperience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-icon">{exp.icon}</div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company} <span className="duration">{exp.duration}</span></h4>
                <h5>{exp.resp}</h5>
                <ul>
                  {exp.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section">
        <h2><FaGraduationCap /> Education</h2>
        <div className="timeline">
          {education.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-icon">{edu.icon}</div>
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution} <span className="year">{edu.year}</span></h4>
                <ul>
                  {edu.highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2><FaChartLine /> Technical Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
          

    </div>
  );
};

export default Experience;