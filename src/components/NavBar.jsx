import React, { useState } from "react";
import "../assets/styles/NavBar.CSS";
import { IoIosArrowDown } from "react-icons/io";
import { FaSun } from "react-icons/fa";

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode");
  };

  return (
    <nav className="navBar">
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
        <div className={`switch ${darkMode ? "" : "active"}`}>
          <div className="circle">
            <FaSun />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
