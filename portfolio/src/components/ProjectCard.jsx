import React from "react";

const ProjectCard = ({ title, description, img, tech, github, live }) => {
  return (
    <div className="project-card" data-aos="zoom-in" data-aos-duration="600">
      <img src={img} alt={title} className="project-img" />

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech-stack">
        {tech.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={github} target="_blank">
          GitHub
        </a>
        {live && (
          <a href={live} target="_blank" className="live-btn">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
