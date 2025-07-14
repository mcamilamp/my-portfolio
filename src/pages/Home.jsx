import React from "react";
import "../assets/styles/Home.CSS"; // Assuming you have a CSS file for styles
import profileImage from "../assets/images/foto-perfil.jpg";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>
          María Camila <br />
          Mercado Payares
        </h1>
        <p>Estudiante de Ingeniería de Sistemas</p>
        <button className="btn-pink">Sobre mí</button>
      </div>
      <div className="home-image">
        <img src={profileImage} alt="María Camila" />
      </div>
    </section>
  );
}

export default Home;
