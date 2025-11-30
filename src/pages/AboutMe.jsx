import React, { useContext } from "react";
import "../assets/styles/AboutMe.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGithub,
  FaReact,
  FaJs,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { LanguageContext } from "../context/LanguageContext";
import { translate } from "../utils/translate";

function AboutMe() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="aboutMe-container">
      <div className="aboutMe-content">
        <h1>{translate(language, "about.title")}</h1>
        <p>
          {translate(language, "about.greeting")}{" "}
          <span className="span-name">María Camila</span>
        </p>

        <p>{translate(language, "about.paragraph1")}</p>
        <p>{translate(language, "about.paragraph2")}</p>

        <h2>{translate(language, "about.interestsTitle")}</h2>
        <ul>
          <div className="interests-container">
            {translate(language, "about.interests").map((interest, index) => (
              <span key={index} className="interest">
                {interest}
              </span>
            ))}
          </div>
        </ul>

        <h2>{translate(language, "about.skillsTitle")}</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <FaHtml5 className="skill-icon html" />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="skill-icon css" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <FaSass className="skill-icon sass" />
            <p>SASS</p>
          </div>
          <div className="skill-item">
            <FaJs className="skill-icon js" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <FaReact className="skill-icon react" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <SiNextdotjs className="skill-icon nextjs" />
            <p>Next.js</p>
          </div>
          <div className="skill-item">
            <FaGithub className="skill-icon github" />
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
