import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  NavLogo,
  NavbarContainer,
  NavB,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <NavB scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              ETDN
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  className="active"
                  offset={20}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={20}
                >
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="designs"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={20}
                >
                  Designs
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="extras"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={20}
                >
                  Extras
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/contactme">Contact me</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </NavB>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
