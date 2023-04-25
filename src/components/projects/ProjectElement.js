import styled, { keyframes } from "styled-components";

export const ProjectContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0% rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ProjectBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a40;
`;

export const ProjectWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  z-index: 3;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 320px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ProjectIcon = styled.img`
  height: 100px;
  width: 140px;
  margin-bottom: 20px;
  transition: transform 0.5s ease;
  &.projectIconAnimation1 {
    height: 80px;
    width: 80px;
    &:hover {
      transform: rotate(360deg);
    }
  }
  &.projectIconAnimation2 {
    &:hover {
      transform: rotate(-45.77deg);
    }
  }
  z-index: 3;
`;

export const ProjectH1 = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-family: var(--arame);
  margin-bottom: 60px;
  z-index: 3;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectH2 = styled.h2`
  color: white;
  font-size: 1rem;
  font-family: var(--arame);
  margin-bottom: 10px;
`;

export const ProjectP = styled.p`
  color: white;
  font-size: 1rem;
  font-family: var(--spacemono);
  text-align: center;
`;
