import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import Projects from './components/Projects';
import C from './components/C';
import Experience from './components/Experience';
import Certification from './components/Certification';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cert" element={<Certification />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/c" element={<C />} />
      
      </Routes>
  );
}

export default App;