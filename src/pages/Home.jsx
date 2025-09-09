import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Home.CSS";
import Projects from "../components/Projects.jsx";
import TechSlider from "../components/TechSlider";

import profileImage from "../assets/images/foto-perfil.jpg";
// import profileImage from "../assets/images/foto2.jpg";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <div className="light-effect"></div>
        <h1>
          <span className="highlight-name">María Camila</span>
          <br />
          <span className="highlight-lastname">Mercado Payares</span>
        </h1>
        <p>Estudiante de Ingeniería de Sistemas</p>
        <p className="slogan">
          Capaz de construir, probar y dirigir con visión y compromiso.
        </p>

        <div className="buttons-home">
          <Link
            to="/about
          "
            className="btn-pink"
          >
            Sobre mí
          </Link>
          <button
            className="btn-yellow"
            onClick={() =>
              window.open("/cv-mcamilamp.pdf", "_blank", "noopener,noreferrer")
            }
          >
            Mi CV
          </button>
        </div>
      </div>
      {/* <div className="home-image">
        <div className="image-bg" />
        <img src={profileImage} alt="María Camila" />
      </div> */}
      <TechSlider />
      <Projects />

      <div className="contact">
        <h3 className="title-contact">¿Te interesa mi perfil profesional?</h3>
        <p className="text-contact">
          Disponible para colaborar en desarrollo, diseño o gestión de
          proyectos.
        </p>
        <button className="btn-contact">¡Contáctame Ahora!</button>
      </div>
    </section>
  );
}

export default Home;
