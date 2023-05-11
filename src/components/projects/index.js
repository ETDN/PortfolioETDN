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
import Shoes from "../../images/nike_stussy.png";
import Sport from "../../images/sports.png";
import bg_video from "../../videos/sky.gif";

const Projects = () => {
  const openLinkInNewTab = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <ProjectContainer id="projects">
        <ProjectBg>
          <VideoBg src={bg_video} type="video/mp4" />
        </ProjectBg>
        <ProjectH1>Projects</ProjectH1>
        <ProjectWrapper>
          <ProjectCard
            onClick={() =>
              openLinkInNewTab("https://github.com/ETDN/pokedex_typescript")
            }
          >
            <ProjectIcon src={Pokeball} className="projectIconAnimation1" />
            <ProjectH2>Pokedex</ProjectH2>
            <ProjectP>
              Pokedex application with the use of PokeAPI. Figma mockup link,
              coded in Typescript - Still
            </ProjectP>
          </ProjectCard>
          <ProjectCard
            onClick={() =>
              openLinkInNewTab("https://github.com/ETDN/sneakers_etdn")
            }
          >
            <ProjectIcon src={Shoes} className="projectIconAnimation2" />
            <ProjectH2>ETDN's shoes</ProjectH2>
            <ProjectP>
              Mobile app to search and buy shoes, UI focused. With the use of
              youtube tutorials
            </ProjectP>
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon src={Sport} className="projectIconAnimation3" />
            <ProjectH2>Sport infrastructure</ProjectH2>
            <ProjectP>
              Web application for the reservation and planification of the
              Sierre's sport infrastructure
            </ProjectP>
          </ProjectCard>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Projects;
