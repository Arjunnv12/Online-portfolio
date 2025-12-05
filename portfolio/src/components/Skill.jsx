import React from "react";

function Skill() {
  const skill = ["React.js", "JavaScript", "Java", "Html", "Css", "React"];
  return (
    <div className="page">
      <h2>Skills</h2>
      <ul>
        {skill.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
export default Skill;
