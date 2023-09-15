import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImg = styled.img`
  border-radius: 15%;
  width: 46px;
  border: solid 2px rgba(52, 112, 255, 1);
  :hover,
  :focus {
    color: rgba(11, 68, 205, 1);
  }
`;
export const LinkWrap = styled.ul`
  display: flex;
  gap: 50px;
`;
export const StyledLink = styled(NavLink)`
  color: rgba(52, 112, 255, 1);
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  transition: color 0.2s ease;
  &.active {
    color: rgba(11, 68, 205, 1);
    text-decoration: underline;
  }
`;
