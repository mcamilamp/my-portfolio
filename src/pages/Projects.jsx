import React, { useContext } from "react";
import "../assets/styles/MyProjects.css";
import { LanguageContext } from "../context/LanguageContext";
import { translate } from "../utils/translate";

function MyProjects() {
  const { language } = useContext(LanguageContext);

  const projectLinks = [
    "https://github.com/tuusuario/adaptedu",
    "https://github.com/tuusuario/rsc",
    "https://github.com/tuusuario/airline",
  ];

  const projectsData = translate(language, "myProjects.projects");
  const projects = Array.isArray(projectsData) ? projectsData : [];

  return (
    <section className="my-projects">
      <h1 className="projects-title">
        {translate(language, "myProjects.title")}
      </h1>
      <p className="projects-subtitle">
        {translate(language, "myProjects.subtitle")}
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{translate(language, "myProjects.title")}</h2>
            <p>{translate(language, "myProjects.description")}</p>
            <a
              href={projectLinks[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pink"
            >
              {project.button}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
