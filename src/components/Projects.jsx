import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Projects.css";
import { projects } from "../data/projects";

function Projects() {
  const [activeFilter, setActiveFilter] = React.useState("Todos");

  return (
    <section className="projects-section">
      <h2 className="projects-title">Mis Proyectos</h2>

      <nav className="projects-nav">
        <ul>
          {["Todos", "Web", "QA", "PM"].map((filter) => (
            <li
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </li>
          ))}
        </ul>
      </nav>

      <div className="projects-container">
        {projects
          .filter((p) => activeFilter === "Todos" || p.filter === activeFilter)
          .map((project, index) => (
            <Link
              to={`/project/${encodeURIComponent(project.title)}`}
              key={project.title}
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <div className="title-badge">
                  <h3 className="project-title">{project.title}</h3>
                  <span
                    className={`project-badge ${project.filter.toLowerCase()}`}
                  >
                    {project.filter}
                  </span>
                </div>
                <p>{project.description}</p>

                {/* <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Explorar Proyecto
                </a> */}
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}

export default Projects;
