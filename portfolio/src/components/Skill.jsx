import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import skillCategories from "../components/skillCategories";
import "../style/skill.css";

function Skill() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <div className=" skills-page">
      <h2 className="title">My Skills</h2>

      {Object.keys(skillCategories).map((category, i) => (
        <div key={i} className="category-section">
          <h3 className="category-title" data-aos="fade-right">
            {category.toUpperCase()}
          </h3>

          <div className="skills-grid">
            {skillCategories[category].map((skill, j) => (
              <div className="skill-card" key={j} data-aos="zoom-in">
                <img src={skill.img} alt={skill.name} className="skill-img" />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skill;
