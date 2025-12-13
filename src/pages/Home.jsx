import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Home.CSS";
import Projects from "../components/Projects.jsx";
import TechSlider from "../components/TechSlider";
import { translate } from "../utils/translate";
import { LanguageContext } from "../context/LanguageContext";

function Home() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="home">
      <div className="home-content">
        <div className="light-effect"></div>
        <h1>
          <span className="highlight-name">María Camila</span>
          <br />
          <span className="highlight-lastname">Mercado Payares</span>
        </h1>
        <p>{translate(language, "home.title")}</p>
        <p className="slogan">{translate(language, "home.slogan")}</p>

        <div className="buttons-home">
          <Link to="/about" className="btn-pink">
            {translate(language, "home.aboutBtn")}
          </Link>
          <button
            className="btn-yellow"
            onClick={() =>
              window.open("/cv-mcamilamp.pdf", "_blank", "noopener,noreferrer")
            }
          >
            {translate(language, "home.cvBtn")}
          </button>
        </div>
      </div>

      <TechSlider />
      <Projects />

      <div className="contact">
        <h3 className="title-contact">
          {translate(language, "home.contactTitle")}
        </h3>
        <p className="text-contact">
          {translate(language, "home.contactText")}
        </p>
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=camimerpa@gmail.com" 
          className="btn-contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate(language, "home.contactBtn")}
        </a>
      </div>
    </section>
  );
}

export default Home;
