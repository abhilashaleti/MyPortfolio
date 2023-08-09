import React from "react";
import { Link } from "react-router-dom";
import "./Heroimg.css";
import bg1 from "../assets/bg1.jpg";
import resume from "../assets/resume.pdf";
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={bg1} alt="bg-img" className="into-img" />
      </div>
      <div className="content">
        <p> Hi, I'M Abhilash </p>
        <h1>Java Full-Stack Developer</h1>
        <p className="me">
          Welcome to my portfolio! I am an enthusiastic and motivated fresher,
          eager to make a mark in the IT Industry.
        </p>
        <div>
          <a href={resume} download className="btn">
            {" "}
            MY Resume{" "}
          </a>
          <Link to="/contact" className="btn btn-light">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
