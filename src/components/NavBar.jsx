import React, { useState } from "react";
import "../assets/styles/NavBar.CSS"; // Assuming you have a CSS file for styles

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
        <span className="label">ES</span>
        <div className="{`switch ${darkMode ? '' : 'active'}`}">
          <div className="circle" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
