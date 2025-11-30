// src/data/projects.js
import project1Img from "../assets/images/1.png";
import project2Img from "../assets/images/2.png";
import project3Img from "../assets/images/3.png";
import project4Img from "../assets/images/4.png";

import carrusel1 from "../assets/images/carrusel1.png";
import carrusel2 from "../assets/images/carrusel2.png";
import carrusel3 from "../assets/images/carrusel3.png";

// ICONOS
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiNextdotjs } from "react-icons/si";

export const techIcons = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Node.js": FaNodeJs,
  CSS: FaCss3Alt,
  MongoDB: SiMongodb,
};

export const projects = [
  {
    id: 1,
    key: "adaptedu",
    image: project1Img,
    filter: "Web",
    github: "https://github.com/usuario/adaptedu",
    technologies: ["React", "Node.js", "CSS", "MongoDB"],
    carousel: [carrusel1, carrusel2, carrusel3, carrusel1, carrusel2],
  },

  {
    id: 2,
    key: "rideshare",
    image: project2Img,
    filter: "Web",
    github: "https://github.com/usuario/rideshare",
    technologies: ["React", "Node.js", "CSS", "MongoDB"],
    carousel: [carrusel1, carrusel2, carrusel3, carrusel1, carrusel2],
  },

  {
    id: 3,
    key: "airline",
    image: project3Img,
    filter: "QA",
    github: "https://github.com/usuario/airlineapp",
    technologies: ["React", "Node.js", "MongoDB"],
    carousel: [carrusel1, carrusel2, carrusel3, carrusel1, carrusel2],
  },

  {
    id: 4,
    key: "airlineApp",
    image: project4Img,
    filter: "PM",
    github: "https://github.com/usuario/airlineapp",
    technologies: ["React", "Node.js", "MongoDB"],
    carousel: [carrusel1, carrusel2, carrusel3, carrusel1],
  },
];

// export const projects = [
//   {
//     title: "AdaptEdu",
//     description:
//       "Aplicación educativa personalizada según estilos de aprendizaje.",
//     image: project1Img,
//     filter: "Web",
//     details:
//       "AdaptEdu es una aplicación web que personaliza el contenido educativo según los estilos de aprendizaje de los usuarios. Utiliza algoritmos de inteligencia artificial para adaptar lecciones, ejercicios y evaluaciones, mejorando la retención y comprensión del material.",
//     github: "https://github.com/usuario/adaptedu",
//     technologies: ["React", "Node.js", "CSS", "MongoDB"],
//     carousel: [carrusel1, carrusel2, carrusel3, carrusel1, carrusel2],
//   },
//   {
//     title: "Ride Share Connect",
//     description: "Plataforma de transporte compartido con reservas y pagos.",
//     image: project2Img,
//     filter: "Web",
//     details:
//       "Ride Share Connect es una plataforma que facilita el transporte compartido entre usuarios. Permite a los conductores ofrecer viajes y a los pasajeros reservar asientos, gestionar pagos y calificar experiencias, promoviendo una movilidad más sostenible.",
//     github: "https://github.com/usuario/rideshare",
//     technologies: ["React", "Node.js", "CSS", "MongoDB"],
//     carousel: [carrusel1, carrusel2, carrusel3, carrusel1, carrusel2],
//   },
//   {
//     title: "Airline App",
//     description: "Sistema para aerolíneas con gestión de vuelos y usuarios.",
//     image: project3Img,
//     filter: "QA",
//     details:
//       "Airline App es un sistema integral para aerolíneas que gestiona vuelos, reservas y perfiles de usuarios. Incluye funcionalidades para check-in en línea, notificaciones de vuelo y administración de programas de fidelidad, mejorando la experiencia del cliente.",
//     github: "https://github.com/usuario/airlineapp",
//     technologies: ["React", "Node.js", "MongoDB"],
//     carousel: [carrusel1, carrusel2, carrusel3, carrusel1, carrusel2],
//   },
//   {
//     title: "Airline",
//     description: "Sistema para aerolíneas con gestión de vuelos y usuarios.",
//     image: project4Img,
//     filter: "PM",
//     details:
//       "Airline App es un sistema integral para aerolíneas que gestiona vuelos, reservas y perfiles de usuarios. Incluye funcionalidades para check-in en línea, notificaciones de vuelo y administración de programas de fidelidad, mejorando la experiencia del cliente.",
//     github: "https://github.com/usuario/airline",
//     technologies: ["React", "CSS"],
//     carousel: [carrusel1, carrusel2, carrusel3, carrusel1, carrusel2],
//   },
// ];
