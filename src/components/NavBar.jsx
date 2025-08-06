import React, { useEffect, useState } from "react";
import "../assets/styles/NavBar.CSS";
import { IoIosArrowDown } from "react-icons/io";
import { FaSun } from "react-icons/fa";

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode");
  };

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
          <li>Inicio</li>
          <li>Sobre mí</li>
          <li>Proyectos</li>
          <li>Contáctame</li>
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

export default NavBar;
