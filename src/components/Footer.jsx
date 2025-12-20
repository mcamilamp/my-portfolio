import React, { useContext } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../assets/styles/Footer.css";
import { LanguageContext } from "../context/LanguageContext";
import { translate } from "../utils/translate";

function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <p className="footer-name">María Camila Mercado Payares</p>
      <div className="footer-icons">
        <a
          href="https://github.com/mcamilamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/maria-camila-mercado-payares-1a2383289/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:camimerpa@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-bible">{translate(language, "footer.verse")}</p>
      <p className="footer-copy">
        © {new Date().getFullYear()} {translate(language, "footer.thanks")}
      </p>
    </footer>
  );
}

export default Footer;
