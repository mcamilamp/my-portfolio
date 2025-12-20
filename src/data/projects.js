// src/data/projects.js
import project3Img from "../assets/images/3.png";
import project4Img from "../assets/images/4.png";
import flowerImg from "../assets/images/flower.png";
import sauceDemoMain from "../assets/images/QA-sourceDemo.png";
import sauceDemo1 from "../assets/images/QA-sourceDemo (1).png";
import sauceDemo2 from "../assets/images/QA-sourceDemo (2).png";

import carrusel1 from "../assets/images/carrusel1.png";
import carrusel2 from "../assets/images/carrusel2.png";
import carrusel3 from "../assets/images/carrusel3.png";
import hemsVideo from "../assets/images/HEMS-video.mp4";
import hems1 from "../assets/images/hems (1).png";
import hems2 from "../assets/images/hems (2).png";
import hems3 from "../assets/images/hems (3).png";
import hems4 from "../assets/images/hemsDevice.png";
import hems5 from "../assets/images/hems (5).png";
import hems6 from "../assets/images/hems (6).png";
import hemsLogin from "../assets/images/hems-login.png";
import hemsRegister from "../assets/images/hems-register.png";
import adaptEdu1 from "../assets/images/adaptEdu (1).png";
import adaptEdu2 from "../assets/images/adaptEdu (2).png";
import imgAdaptedu from "../assets/images/imgAdaptedu.png";

import flowerVideo from "../assets/images/flower-video.mp4";
import flower1 from "../assets/images/flower_1.png";
import flower3 from "../assets/images/flower_3.png";


// ICONOS
import { FaReact, FaNodeJs, FaCss3Alt, FaSass, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiPostgresql, SiInfluxdb } from "react-icons/si";

export const techIcons = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Node.js": FaNodeJs,
  CSS: FaCss3Alt,
  HTML: FaHtml5,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  InfluxDB: SiInfluxdb,
  SASS: FaSass,
};

export const projects = [
  {
    id: 1,
    key: "sauce_demo",
    image: sauceDemoMain,
    filter: "QA",
    github: "https://github.com/mcamilamp/QA-SauceDemo.git",
    technologies: ["Manual Testing", "Test Planning", "Bug Reporting", "Excel"],
    carousel: [sauceDemoMain, sauceDemo1, sauceDemo2],
  },

  {
    id: 2,
    key: "hems",
    image: hems1,
    filter: "Web",
    github: "https://github.com/mcamilamp/hems.git",
    technologies: ["Next.js", "PostgreSQL", "InfluxDB", "SASS"],
    carousel: [
      hemsVideo,
      hems1,
      hems2,
      hems3,
      hems5,
      hems4,
      hems6,
      hemsLogin,
      hemsRegister
    ],
  },

  {
    id: 3,
    key: "pm_project",
    image: imgAdaptedu,
    filter: "PM",
    pdf: "/TRABAJO FINAL PM.pdf",
    technologies: [""],
    carousel: [imgAdaptedu, adaptEdu1, adaptEdu2],
  },

  {
    id: 4,
    key: "flower",
    image: flower1,
    filter: "Web",
    github: "https://github.com/mcamilamp/flower-website",
    tutorial: "https://youtu.be/cLOT0APQzDs?si=GSzPwJ8G2f4w0Ygf",
    technologies: ["HTML", "CSS"],
    carousel: [flower1, flower3, flowerImg, flowerVideo],
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
