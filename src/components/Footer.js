import React from "react";
import "./Footer.css";
import { FaHome, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{
                color: "#fff",
                marginRight: "1rem",
                marginTop: "0.4rem",
              }}
            />
            <div>
              <p>Kukatpally,</p>
              <p>Hyderbad.</p>
            </div>
          </div>
          <div className="icon">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "1rem" }} />{" "}
            <span>9885120762</span>
          </div>
          <div className="icon">
            <BiLogoGmail
              size={20}
              style={{
                color: "#fff",
                marginRight: "1rem",
                marginTop: "0.5rem",
              }}
            />{" "}
            <span>abhilashaleti@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <h4>Aleti Abhilash</h4>
          <p>Java Full-stack Developer</p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/abhilash-aleti-292993220/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://github.com/abhilashaleti"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <small>&copy; Abhilash Portfolio. All rights reserved</small>
      </div>
    </div>
  );
};

export default Footer;
