import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/MainNavBar.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import "../assets/styles/LightMode.css";

import { translate } from "../utils/translate";
import { LanguageContext } from "../context/LanguageContext";

function MainNavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("home");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("light-mode", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  const handleChangeLanguage = (lang) => {
    changeLanguage(lang);
    setShowLanguageMenu(false);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) document.body.classList.add("light-mode");
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

  useEffect(() => {}, [language]);

  return (
    <nav className={`navBar ${showNav ? "" : "navBar-hidden"}`}>
      <div className="links">
        <ul className="nav-links">
          {[
            { key: "home", href: "/" },
            { key: "about", href: "/about" },
            { key: "projects", href: "/projects" },
            { key: "contact", href: "#contact" },
          ].map((link) => (
            <li
              key={link.key}
              className={activeLink === link.key ? "active" : ""}
              onClick={() => setActiveLink(link.key)}
            >
              <Link to={link.href}>
                {translate(language, `nav.${link.key}`)}
              </Link>
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
