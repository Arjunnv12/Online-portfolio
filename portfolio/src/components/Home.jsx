import React, { useState } from "react";
import "../style/home.css";

function Home() {
  const [theme, settheme] = useState("dark");

  const toggleTheme = () => {
    settheme(theme === "dark" ? "light" : "dark");
    document.body.classList.toggle("light-mode");
  };
  return (
    <div className="home">
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </div>
      <div className="content">
        <h1>
          Hi I'm <span className="highlight">Arjun</span>
        </h1>
        <h2 className="subtitle">
          Aspiring Full Stack Developer || React.js Enthusiast{" "}
        </h2>
      </div>
      <div className="buttons">
        <a href="#projects" className="btn">
          View My Work
        </a>
        <a href="/resume.pdf" download className="btn outline">
          Download Resume
        </a>
      </div>
    </div>
  );
}
export default Home;
