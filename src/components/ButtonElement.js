import styled from "styled-components";
import { Link } from "react-scroll";

export const ButtonElement = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#516d9d" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#010606")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-family: var(--arame);
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#516d9d")};
    color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  }
`;

//1:33:00
