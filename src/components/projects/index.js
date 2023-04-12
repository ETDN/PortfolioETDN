import React from "react";
import {
  ProjectBg,
  ProjectCard,
  ProjectContainer,
  ProjectH1,
  ProjectH2,
  ProjectIcon,
  ProjectP,
  ProjectWrapper,
  VideoBg,
} from "./ProjectElement";

import Pokeball from "../../images/pokeball.png";
import Plant from "../../images/plant.png";
import Undefined from "../../images/undefined.png";
import bg_video from "../../videos/sky.mp4";

const Projects = () => {
  return (
    <>
      <ProjectContainer id="projects">
        <ProjectBg>
          <VideoBg autoPlay loop muted src={bg_video} type="video/mp4" />
        </ProjectBg>
        <ProjectH1>Projects</ProjectH1>
        <ProjectWrapper>
          <ProjectCard>
            <ProjectIcon src={Pokeball} />
            <ProjectH2>Pokedex</ProjectH2>
            <ProjectP>
              Pokedex application with the use of PokeAPI. Figma mockup link,
              coded in Typescript
            </ProjectP>
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon src={Plant} />
            <ProjectH2>Plant App Flutter</ProjectH2>
            <ProjectP>
              Mobile app to search and buy plants, UI focused. With the use of
              youtube tutorials
            </ProjectP>
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon src={Undefined} />
            <ProjectH2>Undefined</ProjectH2>
            <ProjectP>To be done...</ProjectP>
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon src={Undefined} />
            <ProjectH2>Undefined</ProjectH2>
            <ProjectP>To be done...</ProjectP>
          </ProjectCard>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Projects;
