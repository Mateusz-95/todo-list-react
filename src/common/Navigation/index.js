import React from "react";
import { NavList, NavListItem, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavListItem>
          <StyledNavLink activeClassName="active" to="/zadania">
            Zadania
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </NavListItem>
      </NavList>
    </nav>
  );
};

export default Navigation;
