import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #333;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  display: flex;
`

export const Logo = styled.h1`
  color: #f5c518;
  font-size: 24px;
  margin: 0;
`;

export const LogoSpan = styled.h1`
  color: #fff;
  font-size: 24px;
  margin: 0;
`

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavLink = styled(RouterNavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  transition: color 0.4s ease;

  &.active {
    color: #f5c518;
  }

  &:hover {
    color: #f5c518;
  }

  &:hover::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #f5c518;
    transition: width 0.3s ease;
  }
`;

