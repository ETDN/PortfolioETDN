import React from "react";
import {
  ServiceBg,
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
  VideoBg,
} from "./ServicesElements";

import Icon1 from "../../images/workout.svg";
import Icon2 from "../../images/music.svg";
import Icon3 from "../../images/cooking.svg";
import bg_video from "../../videos/retro.mp4";

const Services = () => {
  return (
    <>
      <ServicesContainer id="extras">
        <ServiceBg>
          <VideoBg autoPlay loop muted src={bg_video} type="video/mp4" />
        </ServiceBg>
        <ServicesH1>Hobbies</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Workout</ServicesH2>
            <ServicesP>We ahsjdhsajdhsjaddsadj djskdjksd dsjkdsja</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Music & chill</ServicesH2>
            <ServicesP>We ahsjdhsajdhsjaddsadj djskdjksd dsjkdsja</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Cooking</ServicesH2>
            <ServicesP>We ahsjdhsajdhsjaddsadj djskdjksd dsjkdsja</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
