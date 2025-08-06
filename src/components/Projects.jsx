import React from "react";
import "../assets/styles/Projects.css";
import project1Img from "../assets/images/1.png";
import project2Img from "../assets/images/2.png";
import project3Img from "../assets/images/3.png";
import project4Img from "../assets/images/4.png";

const projects = [
  {
    title: "AdaptEdu",
    description:
      "Aplicación educativa personalizada según estilos de aprendizaje.",
    image: project1Img,
    filter: "Web",
    link: "#",
  },
  {
    title: "Ride Share Connect",
    description: "Plataforma de transporte compartido con reservas y pagos.",
    image: project2Img,
    filter: "Web",
    link: "#",
  },
  {
    title: "Airline App",
    description: "Sistema para aerolíneas con gestión de vuelos y usuarios.",
    image: project3Img,
    filter: "QA",
    link: "#",
  },
  {
    title: "Airline App",
    description: "Sistema para aerolíneas con gestión de vuelos y usuarios.",
    image: project4Img,
    filter: "PM",
    link: "#",
  },
];

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
            <div className="project-card" key={index}>
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
            </div>
          ))}
      </div>
    </section>
  );
}

export default Projects;
