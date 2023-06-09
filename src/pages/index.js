import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero";
import InfoSection from "../components/info";
import {
  homeObjOne,
  // homeObjThree,
  homeObjTwo,
  // homeObjFour,
} from "../components/info/Data";
import FooterElement from "../components/footer/index.js";
import Projects from "../components/projects";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    //set isOpen to true or false
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Projects />
      <InfoSection {...homeObjTwo} />
      <FooterElement />
    </>
  );
};

export default Home;
