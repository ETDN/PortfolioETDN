import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero";
import InfoSection from "../components/info";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjFour,
} from "../components/info/Data";
import Services from "../components/services";
import FooterElement from "../components/footer/index.js";

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
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Services />
      <FooterElement />
    </>
  );
};

export default Home;
