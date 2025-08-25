import { useParams } from "react-router-dom";
import "../assets/styles/ProjectDetail.css";
import { projects, techIcons } from "../data/projects";

function ProjectDetail() {
  const { title } = useParams();
  const project = projects.find((p) => p.title === decodeURIComponent(title));

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <section className="project-detail">
      <div className="project-left">
        <img src={project.image} alt={project.title} className="main-image" />
        <div className="carousel">
          {project.carousel.map((img, index) => (
            <img key={index} src={img} alt={`preview-${index}`} />
          ))}
        </div>
      </div>

      <div className="project-right">
        <h2>{project.title}</h2>
        <p>{project.details}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Ver código en GitHub
        </a>
        <div className="technologies">
          <h3>Tecnologías Utilizadas:</h3>
          <div className="tech-icons">
            {project.technologies.map((tech, index) => {
              const Icon = techIcons[tech];
              return Icon ? (
                <div key={index} className="tech-icon">
                  <Icon
                    size={40}
                    color={
                      tech === "React"
                        ? "#61DBFB"
                        : tech === "Node.js"
                        ? "#68A063"
                        : tech === "CSS"
                        ? "#264de4"
                        : tech === "MongoDB"
                        ? "#4DB33D"
                        : "#000"
                    }
                  />
                  <small className="tech-name">{tech}</small>
                </div>
              ) : (
                <div key={index} className="tech-icon">
                  <small className="tech-name">{tech}</small>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
