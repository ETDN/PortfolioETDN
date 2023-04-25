import styled from "styled-components";
import { NavLink as LinkR } from "react-router-dom";

export const ButtonElement = styled(LinkR)`
  border-radius: 50px;
  background: transparent;
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
