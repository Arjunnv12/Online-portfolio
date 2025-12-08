import Navbar from "./components/Navbar";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Project from "./components/Project";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import AOS from "aos";
import "./style/skill.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
