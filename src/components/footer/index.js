import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  WebsitesRights,
} from "./FooterElement";

import { FaLinkedin, FaSpotify, FaGithub } from "react-icons/fa";

const FooterElement = () => {
  const toggle = () => {
    scroll.scrollToTop();
  };

  const openLinkInNewTab = (link) => {
    window.open(link, "_blank");
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
              <SocialIconLink
                className="socialLink1"
                onClick={() =>
                  openLinkInNewTab("https://github.com/ETDN/PortfolioETDN")
                }
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />{" "}
              </SocialIconLink>
              <SocialIconLink
                className="socialLink2"
                onClick={() => openLinkInNewTab("www.linkedin.ch/etdn")}
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />{" "}
              </SocialIconLink>
              <SocialIconLink
                className="socialLink3"
                onClick={() =>
                  openLinkInNewTab(
                    "https://open.spotify.com/user/delteodoro?si=04d056145412471e"
                  )
                }
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
