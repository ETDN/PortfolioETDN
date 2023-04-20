import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElements";
import bg_video from "../../videos/sunset.mp4";
import { ButtonElement } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover); //set hover to true or false depending on current state
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={bg_video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Emilie Teodoro Do Nascimento</HeroH1>
        <HeroP>Software & Mobile Front-End Developer</HeroP>
        <HeroBtnWrapper>
          <ButtonElement
            to="/contactme"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact me? {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonElement>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
