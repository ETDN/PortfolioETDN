import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  WebsitesRights,
} from "./FooterElement";

import { FaInstagram, FaLinkedin, FaSpotify, FaGithub } from "react-icons/fa";

const FooterElement = () => {
  const toggle = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggle}>
              ETDN
            </SocialLogo>
            <WebsitesRights to="/">
              ETDN &#169; {new Date().getFullYear()} All rights reserved.
            </WebsitesRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />{" "}
              </SocialIconLink>
              <SocialIconLink
                href="//https://github.com/ETDN/PortfolioETDN"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />{" "}
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.ch/etdn"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />{" "}
              </SocialIconLink>
              <SocialIconLink
                href="//https://open.spotify.com/user/delteodoro?si=04d056145412471e"
                target="_blank"
                aria-label="Spotify"
              >
                <FaSpotify />{" "}
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default FooterElement;
