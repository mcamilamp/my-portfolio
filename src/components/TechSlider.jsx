import React from "react";
import Marquee from "react-fast-marquee";
import "../assets/styles/TechSlider.css"; // Ensure you have the correct path to your CSS file
import {
  SiReact,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiMysql,
  SiPostman,
  SiGithub,
  SiGit,
  SiAngular,
  SiPhp,
  SiFigma,
  SiCypress,
} from "react-icons/si";

const TechSlider = () => {
  return (
    <div className="tech-slider-wrapper">
      <div className="tech-slider-header">
        <h2 className="title-tech-slider">Mi Stack tecnológico</h2>
      </div>
      <div className="tech-slider">
        <Marquee speed={50} gradient={false}>
          <div className="tech-item react">
            <SiReact />
          </div>
          <div className="tech-item tailwind">
            <SiTailwindcss />
          </div>
          <div className="tech-item cypress">
            <SiCypress />
          </div>
          <div className="tech-item springboot">
            <SiSpringboot />
          </div>
          <div className="tech-item postgresql">
            <SiPostgresql />
          </div>
          <div className="tech-item js">
            <SiJavascript />
          </div>
          <div className="tech-item css">
            <SiCss3 />
          </div>
          <div className="tech-item html">
            <SiHtml5 />
          </div>
          <div className="tech-item mysql">
            <SiMysql />
          </div>
          <div className="tech-item postman">
            <SiPostman />
          </div>
          <div className="tech-item github">
            <SiGithub />
          </div>
          <div className="tech-item git">
            <SiGit />
          </div>
          <div className="tech-item angular">
            <SiAngular />
          </div>
          <div className="tech-item php">
            <SiPhp />
          </div>
          <div className="tech-item figma">
            <SiFigma />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TechSlider;
