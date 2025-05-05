import React from 'react';
import '../App.css';

const FilterButtons = ({ activeFilter, setActiveFilter }) => {
  const filters = ['all', 'frontend', 'fullstack'];
  
  return (
    <div className="filter-buttons">
      {filters.map(filter => (
        <button
          key={filter}
          className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;