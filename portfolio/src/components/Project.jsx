import React from "react";

const ProjectData = [
  {
    title: "Secure QRCode Scanner",
    desc: "Created a secure full-stack app with Flask backend and Flutter frontend,Implemented encrypted QR code generation ensuring tamper-proof data transmission.",
  },
  {
    title: "IoT-Based Meat Quality Detector",
    desc: "Built a smart IoT system using ESP32-CAM and sensors to monitor meat freshness. Processed real-time image and sensor data via ML models served through a Flask API",
  },
  {
    title: "Online Portfolio Website ",
    desc: "Developed a responsive personal portfolio to showcase projects, skills, and experience.Designed an interactive UI with smooth navigation and mobile-friendly layout.",
  },
];

function Project() {
  return (
    <div className="page">
      <h2>Projects</h2>
      <div className="project-list">
        {ProjectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Project;
