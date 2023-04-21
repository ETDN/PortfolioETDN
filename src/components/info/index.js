import React from "react";
import {
  BtnWrap,
  Column1,
  Column2,
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
import bg_video from "../../videos/retro2.mp4";

const InfoSection = ({
  videoBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
}) => {
  return (
    <>
      <InfoContainer videoBg={videoBg} id={id}>
        <InfoBg>
          <VideoBg autoPlay loop muted src={bg_video} type="video/mp4" />
        </InfoBg>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap></BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2></Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
