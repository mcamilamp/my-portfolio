import React from "react";
import "../assets/styles/Home.CSS";
import profileImage from "../assets/images/foto-perfil.jpg";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <div className="light-effect"></div>
        <h1>
          María Camila <br />
          Mercado Payares
        </h1>
        <p>Estudiante de Ingeniería de Sistemas</p>

        <div className="buttons-home">
          <button className="btn-pink">Sobre mí</button>
          <button className="btn-yellow">Mi CV</button>
        </div>
      </div>
      <div className="home-image">
        <div className="image-bg" />
        <img src={profileImage} alt="María Camila" />
      </div>
    </section>
  );
}

export default Home;
