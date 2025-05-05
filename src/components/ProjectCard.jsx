import React from 'react';
import '../App.css';

const ProjectCard = ({ project, onProjectClick }) => {
  return (
    <div className="project-card" onClick={() => onProjectClick(project)}>
      <div className="project-image-container">
        <img src={project.imageUrl} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <h3>{project.title}</h3>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;