import "./AboutContent.css";
import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> About Me </h1>
        <p>
          Welcome to my portfolio! I am an enthusiastic and motivated fresher,
          eager to make a mark in the IT Industry. With a creative outlook and
          an ambition to excel, I thrive on challenges and am adaptable to new
          situations.
        </p>
        <p>
          Being a tech-savvy individual, I'm well-versed in modern technologies
          and embrace them to enhance my productivity. As a fast learner, I
          quickly grasp new concepts and apply them to real-world scenarios.
        </p>
        <p>
          I believe in the power of teamwork and am known for being a reliable
          team player, contributing positively to collective efforts. My passion
          for Software field drives me to constantly seek innovation and find
          solutions that create meaningful impacts.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
