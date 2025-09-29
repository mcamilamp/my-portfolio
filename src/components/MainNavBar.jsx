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

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("light-mode", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add("light-mode");
    }
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
        <span className="label">
          ES <IoIosArrowDown />
        </span>
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
