import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
