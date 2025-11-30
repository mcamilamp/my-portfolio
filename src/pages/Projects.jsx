import React, { useContext } from "react";
import "../assets/styles/MyProjects.css";
import { LanguageContext } from "../context/LanguageContext";
import { translate } from "../utils/translate";
import { projects } from "../data/projects";

function MyProjects() {
  const { language } = useContext(LanguageContext);

  const translations = translate(language, "myProjects.projects") || [];

  console.log("🌍 Language:", language);
  console.log("🗂️ Translations:", translations);

  const combinedProjects = projects.map((project) => {
    const translated = translations.find((t) => t.key === project.key);
    return {
      ...project,
      ...translated,
    };
  });

  return (
    <section className="my-projects">
      <h1 className="projects-title">
        {translate(language, "myProjects.title")}
      </h1>

      <div className="projects-grid">
        {combinedProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
