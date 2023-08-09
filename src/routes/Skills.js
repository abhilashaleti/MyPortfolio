import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import MySkills from "../components/MySkills";
const Skills = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <HeroImg2 heading="My Skills" text="Here are my skills" />
      <MySkills />
      <Footer />
    </div>
  );
};

export default Skills;
