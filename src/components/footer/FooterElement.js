import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: black;
`;

export const FooterWrap = styled.div`
  padding: 24px; //48px
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and(max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsitesRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65px;
`;

export const SocialIconLink = styled.div`
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  &.socialLink1 {
    &:hover {
      color: #5c2a7b;
    }
  }
  &.socialLink2 {
    &:hover {
      color: #0a66c2;
    }
  }
  z-index: 3;
  &.socialLink3 {
    &:hover {
      color: #1ed760;
    }
  }
`;
