import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

import Icon1 from "../../images/workout.svg";
import Icon2 from "../../images/music.svg";
import Icon3 from "../../images/cooking.svg";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
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
