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
    link: "#",
  },
  {
    title: "Ride Share Connect",
    description: "Plataforma de transporte compartido con reservas y pagos.",
    image: project2Img,
    link: "#",
  },
  {
    title: "Airline App",
    description: "Sistema para aerolíneas con gestión de vuelos y usuarios.",
    image: project3Img,
    link: "#",
  },
  {
    title: "Airline App",
    description: "Sistema para aerolíneas con gestión de vuelos y usuarios.",
    image: project4Img,
    link: "#",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Mis Proyectos</h2>

      <nav className="projects-nav">
        <ul>
          <li>Todos</li>
          <li>Web</li>
          <li>QA</li>
          <li>PM</li>
        </ul>
      </nav>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Ver más
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
