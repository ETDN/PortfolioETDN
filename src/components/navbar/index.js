import React from "react";
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

const Navbar = ({ toggle }) => {
  return (
    <>
      <NavB>
        <NavbarContainer>
          <NavLogo to="/">ETDN</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Extras</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contactme">Contact me</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </NavB>
    </>
  );
};

export default Navbar;
