import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-name">María Camila Mercado Payares</p>
      <div className="footer-icons">
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:tucorreo@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-bible">Levántate y Resplandece - Isaías 60:1</p>
      <p className="footer-copy">
        © {new Date().getFullYear()} Gracias por visitar mi portafolio web.
      </p>
    </footer>
  );
}

export default Footer;
