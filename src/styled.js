import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  transition: color 0.5s;
  &.active {
    font-weight: bold;
  }

  &:hover {
    color: #c9c9c9;
  }

  &:active {
    color: #bcbaba;
  }
`;

export const NavList = styled.ul`
  margin: 0px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.normal};
  padding: 20px;
`;

export const NavListItem = styled.li`
  margin: 0 10px;
  list-style: none;
`;
