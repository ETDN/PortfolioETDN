import React from "react";
import { NavLogo, NavbarContainer, NavB } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <NavB>
        <NavbarContainer>
          <NavLogo to="/">ETDN</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </NavB>
    </>
  );
};

export default Navbar;
