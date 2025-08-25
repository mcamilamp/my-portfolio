import { useParams } from "react-router-dom";
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
    details:
      "AdaptEdu es una aplicación web que personaliza el contenido educativo según los estilos de aprendizaje de los usuarios. Utiliza algoritmos de inteligencia artificial para adaptar lecciones, ejercicios y evaluaciones, mejorando la retención y comprensión del material.",
  },
  {
    title: "Ride Share Connect",
    description: "Plataforma de transporte compartido con reservas y pagos.",
    image: project2Img,
    filter: "Web",
    details:
      "Ride Share Connect es una plataforma que facilita el transporte compartido entre usuarios. Permite a los conductores ofrecer viajes y a los pasajeros reservar asientos, gestionar pagos y calificar experiencias, promoviendo una movilidad más sostenible.",
  },
  {
    title: "Airline App",
    description: "Sistema para aerolíneas con gestión de vuelos y usuarios.",
    image: project3Img,
    filter: "QA",
    details:
      "Airline App es un sistema integral para aerolíneas que gestiona vuelos, reservas y perfiles de usuarios. Incluye funcionalidades para check-in en línea, notificaciones de vuelo y administración de programas de fidelidad, mejorando la experiencia del cliente.",
  },
  {
    title: "Airline",
    description: "Sistema para aerolíneas con gestión de vuelos y usuarios.",
    image: project4Img,
    filter: "PM",
    details:
      "Airline App es un sistema integral para aerolíneas que gestiona vuelos, reservas y perfiles de usuarios. Incluye funcionalidades para check-in en línea, notificaciones de vuelo y administración de programas de fidelidad, mejorando la experiencia del cliente.",
  },
];
function ProjectDetail() {
  const { title } = useParams();
  const project = projects.find((p) => p.title === decodeURIComponent(title));

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <section className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <span className={`project-badge ${project.filter.toLowerCase()}`}>
        {project.filter}
      </span>
    </section>
  );
}

export default ProjectDetail;
