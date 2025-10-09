import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/MainNavBar.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import "../assets/styles/LightMode.css";

function MainNavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("home");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [language, setLanguage] = useState("ES");

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("light-mode", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguageMenu(false);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add("light-mode");
    }
    const savedLanguage = localStorage.getItem("language") || "ES";
    setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navBar ${showNav ? "" : "navBar-hidden"}`}>
      <div className="links">
        <ul className="nav-links">
          {[
            { label: "Inicio", href: "/" },
            { label: "Sobre mí", href: "/about" },
            { label: "Proyectos", href: "/projects" },
            { label: "Contacto", href: "#contact" },
          ].map((link) => (
            <li
              key={link.label}
              className={activeLink === link.label ? "active" : ""}
              onClick={() => setActiveLink(link.label)}
            >
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="toggle-container">
        <div className="language-selector">
          <span className="label" onClick={toggleLanguageMenu}>
            {language} <IoIosArrowDown />
          </span>
          {showLanguageMenu && (
            <ul className="language-menu">
              {language !== "ES" && (
                <li onClick={() => changeLanguage("ES")}>ES</li>
              )}
              {language !== "EN" && (
                <li onClick={() => changeLanguage("EN")}>EN</li>
              )}
            </ul>
          )}
        </div>
        <div
          className={`switch ${darkMode ? "" : "active"}`}
          onClick={toggleDarkMode}
        >
          <div className="circle">
            <FaSun />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavBar;
