import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #0c0c0c;
  display: flex;
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
    padding: 100px 0;
  }
`;

export const InfoBg = styled.div`
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
  object-fit: cover;
  background: #232a40;
`;

export const InfoWrapper = styled.div`
  z-index: 3;
  max-width: 1000px;
  position: absolute;
  padding: 8px 64px;
  display: flex;
  float: left;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  margin-top: 50px;
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1` : `'col1 col2'`};

  @media screen and(max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2` : `'col1 col1' 'col2 col2'`};
  }

  @media screen and (max-width: 480px) {
    margin-top: 45%;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: white;
  font-size: 16px;
  font-family: var(--spacemono);
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  font-family: var(--arame);
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 24px;
  font-family: var(--spacemono);
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  z-index: 2;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ButtonA = styled.a`
  border-radius: 50px;
  background-color: #0072b1;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-family: var(--arame);
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  z-index: 3;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
  }
`;
