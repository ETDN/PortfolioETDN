import React, { useState } from "react";
import {
  BtnWrap,
  ButtonA,
  Column1,
  Heading,
  InfoBg,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  VideoBg,
} from "./InfoElements";
import { ArrowForward } from "../hero/HeroElements";
import { ArrowRight } from "../hero/HeroElements";
import bg_video from "../../videos/retro2.gif";

const InfoSection = ({
  videoBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  description2,
  button_label,
  button_color,
  to,
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover); //set hover to true or false depending on current state
  };

  return (
    <>
      <InfoContainer videoBg={videoBg} id={id}>
        <InfoBg>
          <VideoBg src={bg_video} type="video/mp4" />
        </InfoBg>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <ButtonA
                    style={{ background: button_color }}
                    href={to} // Remplacez 'to' par 'href'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    target="_blank"
                    button_color={button_color} // Pour ouvrir le lien dans un nouvel onglet
                  >
                    {button_label} {hover ? <ArrowForward /> : <ArrowRight />}
                  </ButtonA>
                </BtnWrap>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
