import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    font-weight: bold;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.normal};
  padding: 20px;
`;

export const NavListItem = styled.li`
  margin: 0 10px;
  list-style: none;
`;
