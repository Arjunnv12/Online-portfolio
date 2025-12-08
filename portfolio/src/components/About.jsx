import React from "react";
import "../style/about.css";
import aboutText from "../assets/about";

function About() {
  return (
    <div className="about-container">
      <div className="left">
        <img src="/photo.png" alt="" className="profile-pic" />
      </div>

      <p className="description">
        {aboutText.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </p>
    </div>
  );
}
export default About;
