import React from "react";
import "../assets/styles/AboutMe.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGithub,
  FaReact,
  FaJs,
} from "react-icons/fa";

function AboutMe() {
  return (
    <div className="aboutMe-container">
      <div className="aboutMe-content">
        <h1>Sobre mí</h1>
        <p>
          ¡Hola! soy <span className="span-name">María Camila</span>
        </p>

        <p>
          Estudiante de Ingeniería de Sistemas. Con enfoque en desarrollo web
          full stack, Gestión de proyectos y Software Testing. Me apasiona el
          frontend, creando interfaces dinámicas con React, JavaScript, HTML5,
          CSS3, SASS, Tailwind CSS y herramientas de diseño como Figma.
        </p>

        <p>
          Cuento con conocimientos en MySQL, PostgreSQL, control de versiones
          con Git/GitHub, y metodologías ágiles como Scrum, donde he aprendido a
          trabajar de forma colaborativa, gestionar tareas en sprints y
          adaptarme a cambios de manera eficiente. Actualmente me formo en QA y
          pruebas manuales, con el objetivo de contribuir a productos estables y
          centrados en el usuario.
        </p>

        <h2>Mis intereses</h2>
        <ul>
          <div className="interests-container">
            <span className="interest">Desarrollo web frontend y backend</span>
            <span className="interest">
              Diseño de interfaces interactivas (UI/UX)
            </span>
            <span className="interest">Software Testing y QA</span>
            <span className="interest">
              Gestión de proyectos con metodologías ágiles (Scrum)
            </span>
          </div>
        </ul>

        {/* Sección de Skills */}
        <h2>Mis principales Skills</h2>
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
            <FaGithub className="skill-icon github" />
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
