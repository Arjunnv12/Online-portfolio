import { useEffect } from "react";
import AOS from "aos";
import projects from "../assets/project";
import ProjectCard from "./ProjectCard";
import "../assets/project";
const ProjectPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="project-section">
      <h1 data-aos="fade-down">My Project</h1>
      <div className="project-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};
export default ProjectPage;
