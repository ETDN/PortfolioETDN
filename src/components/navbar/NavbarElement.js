import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { NavLink as LinkR } from "react-router-dom";

export const NavB = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: var(--arame);
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 30px;
`;

export const NavLinks = styled(LinkS)`
  color: white;
  font-weight: bold;
  font-family: var(--arame);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  position: relative;

  :hover::after {
    content: "";
    position: absolute;
    bottom: -5px; /* adjust this value to position the point as desired */
    left: 50%;
    transform: translateX(-50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #516d9d;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  background: pink;
  white-space: nowrap;
  padding: 5px 22px;
  color: #fff;
  font-family: var(--arame);
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  position: relative;

  :hover::after {
    content: "";
    position: absolute;
    bottom: -5px; /* adjust this value to position the point as desired */
    left: 50%;
    transform: translateX(-50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #516d9d;
  }
`;
