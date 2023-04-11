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

import { FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterElement = () => {
  const toggle = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Portfolio website</FooterLinkTitle>
              <FooterLink to="contactme">Source code</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About me</FooterLinkTitle>
              <FooterLink to="contactme">Contact</FooterLink>
              <FooterLink to="contactme">Linkedin</FooterLink>
              <FooterLink to="contactme">GitHub</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Extras</FooterLinkTitle>
              <FooterLink to="contactme">Spotify</FooterLink>
              <FooterLink to="contactme">Instagram</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
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
                href="//www.linkedin.ch/etdn"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />{" "}
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default FooterElement;
