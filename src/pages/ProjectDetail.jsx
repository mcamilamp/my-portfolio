import { useParams } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/ProjectDetail.css";
import { projects, techIcons } from "../data/projects";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translate } from "../utils/translate";

function ProjectDetail() {
  const { language } = useContext(LanguageContext);
  const { title } = useParams();
  const project = projects.find((p) => p.title === decodeURIComponent(title));

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    return <div>{translate(language, "projectDetail.notFound")}</div>;
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= project.carousel.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? project.carousel.length - 1 : prev - 1
    );
  };

  // Sacamos las 3 imágenes visibles
  const visibleImages = project.carousel.slice(currentIndex, currentIndex + 3);

  // Si estoy cerca del final y no alcanza para 3, concatenamos desde el inicio
  if (visibleImages.length < 3) {
    visibleImages.push(...project.carousel.slice(0, 3 - visibleImages.length));
  }

  return (
    <section className="project-detail">
      <div className="project-left">
        <img src={project.image} alt={project.title} className="main-image" />

        <div className="carousel-container">
          <button className="arrow left" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="carousel">
            {visibleImages.map((img, index) => (
              <img key={index} src={img} alt={`preview-${index}`} />
            ))}
          </div>

          <button className="arrow right" onClick={nextSlide}>
            &#10095;
          </button>
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
          {translate(language, "projectDetail.githubLink")}
        </a>

        <div className="technologies">
          <h3>{translate(language, "projectDetail.technologiesTitle")}</h3>
          <div className="tech-icons">
            {project.technologies.map((tech, index) => {
              const Icon = techIcons[tech];
              return Icon ? (
                <div key={index} className="tech-icon">
                  <Icon
                    size={40}
                    color={
                      tech === "React"
                        ? "#37b0d1"
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
