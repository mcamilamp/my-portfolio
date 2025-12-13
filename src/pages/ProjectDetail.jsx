import { useParams } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/ProjectDetail.css";
import { projects, techIcons } from "../data/projects";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translate } from "../utils/translate";

function ProjectDetail() {
  const { language } = useContext(LanguageContext);
  const { title: projectKey } = useParams();
  const projectData = projects.find((p) => p.key === projectKey);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState(projectData?.image);

  if (!projectData) {
    return <div>{translate(language, "projectDetail.notFound")}</div>;
  }

  // Combine project data with translations
  const translations = translate(language, "myProjects.projects") || [];
  const translated = translations.find((t) => t.key === projectData.key);
  const project = {
    ...projectData,
    ...translated,
  };

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
        {selectedMedia && typeof selectedMedia === 'string' && selectedMedia.endsWith('.mp4') ? (
          <video src={selectedMedia} controls autoPlay muted loop className="main-image" />
        ) : (
          <img src={selectedMedia || project.image} alt={project.title} className="main-image" />
        )}

        <div className="carousel-container">
          <button className="arrow left" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="carousel">
            {visibleImages.map((item, index) => {
              const isVideo = typeof item === 'string' && item.endsWith('.mp4');
              return isVideo ? (
                <video 
                  key={index} 
                  controls 
                  muted 
                  loop
                  onClick={() => setSelectedMedia(item)}
                  style={{ cursor: 'pointer' }}
                >
                  <source src={item} type="video/mp4" />
                </video>
              ) : (
                <img 
                  key={index} 
                  src={item} 
                  alt={`preview-${index}`} 
                  onClick={() => setSelectedMedia(item)}
                  style={{ cursor: 'pointer' }}
                />
              );
            })}
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
                        ? "#61DAFB"
                        : tech === "Next.js"
                        ? "#ffffff"
                        : tech === "Node.js"
                        ? "#68A063"
                        : tech === "CSS"
                        ? "#264de4"
                        : tech === "MongoDB"
                        ? "#4DB33D"
                        : tech === "PostgreSQL"
                        ? "#336791"
                        : tech === "InfluxDB"
                        ? "#22ADF6"
                        : tech === "SASS"
                        ? "#CC6699"
                        : "#666"
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
