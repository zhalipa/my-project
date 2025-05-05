import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import FilterButtons from '../components/FilterButtons';
import ProjectModal from '../components/ProjectModal';
import projectsData from '../components/projectsData';
import '../App.css';
import Navbar from "./navbar";


const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  if (!projectsData || projectsData.length === 0) {
    return <div>Loading projects...</div>;
  }

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      <Navbar />  
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-subtitle">A collection of my recent work</p>

      <FilterButtons 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter} 
      />
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onProjectClick={setSelectedProject}
          />
        ))}
      </div>
      
      {/* You might also want to include the ProjectModal if a project is selected */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
  };

export default ProjectsPage;  // Don't forget to export the component
