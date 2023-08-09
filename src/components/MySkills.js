import React from "react";
import "./MySkills.css";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiSpringboot } from "react-icons/si";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
const Skills = () => {
  return (
    <div className="skills">
      <p>
        Being a tech-savvy individual, I'm well-versed in modern technologies
        and embrace them to enhance my productivity. As a fast learner, I
        quickly grasp new concepts and apply them to real-world scenarios.
      </p>
      <div className="skills-cards">
        <article className="skills-card">
          <i class="fa-brands fa-java" id="icon"></i>
          <h5>Java</h5>
        </article>

        <article className="skills-card">
          <i class="fa-solid fa-database" id="icon"></i>
          <h5>Oracle SQL</h5>
        </article>

        <article className="skills-card">
          <BiLogoSpringBoot id="icon" />
          <h5>Spring</h5>
        </article>

        <article className="skills-card">
          <SiSpringboot id="icon" />
          <h5>Spring Boot</h5>
        </article>

        <article className="skills-card">
          <i class="fa-brands fa-square-js" id="icon"></i>
          <h5>JavaScript</h5>
        </article>

        <article className="skills-card">
          <i class="fa-brands fa-html5" id="icon"></i>
          <h5>HTML</h5>
        </article>

        <article className="skills-card">
          <i class="fa-brands fa-css3-alt" id="icon"></i>
          <h5>CSS</h5>
        </article>

        <article className="skills-card">
          <i class="fa-brands fa-github" id="icon"></i>
          <h5>Github</h5>
        </article>

        <article className="skills-card">
          <PiMicrosoftExcelLogoFill id="icon" />
          <h5>Ms-Excel</h5>
        </article>
      </div>
    </div>
  );
};

export default Skills;
