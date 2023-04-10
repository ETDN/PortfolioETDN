import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero";

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
    </>
  );
};

export default Home;
