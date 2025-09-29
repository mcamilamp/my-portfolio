import React from "react";
import "../assets/styles/MyProjects.css";

function MyProjects() {
  const projects = [
    {
      title: "AdaptEdu",
      description:
        "Plataforma educativa personalizada con IA que adapta el aprendizaje a estilos como visual, auditivo y kinestésico.",
      link: "https://github.com/tuusuario/adaptedu",
    },
    {
      title: "Ride Share Connect",
      description:
        "Plataforma web para conectar clientes con proveedores de transporte compartido. Incluye reservas, pagos y reseñas.",
      link: "https://github.com/tuusuario/rsc",
    },
    {
      title: "Airline",
      description:
        "Aplicación web para gestión de vuelos de una aerolínea. Me encargué de tiempos, diseño y documentación.",
      link: "https://github.com/tuusuario/airline",
    },
  ];

  return (
    <section className="my-projects">
      <h1 className="projects-title">Mis Proyectos</h1>
      <p className="projects-subtitle">
        Algunos proyectos en los que he trabajado como desarrolladora y gestora.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pink"
            >
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
