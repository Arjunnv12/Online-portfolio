import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Arjun's Portfolio</h2>
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skill">Skills</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
