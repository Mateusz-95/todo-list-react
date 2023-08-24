import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/tasks/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import { NavList, StyledNavLink, NavListItem } from "./styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./features/tasks/TasksPage";

export const App = () => {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
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
          <Switch>
            <Route path="/zadania/:id">
              <TaskPage />
            </Route>
            <Route path="/zadania">
              <TasksPage />
            </Route>
            <Route path="/autor">
              <AuthorPage />
            </Route>
            <Route path="/">
              <Redirect to="/zadania" />
            </Route>
          </Switch>
        </nav>
      </ThemeProvider>
    </HashRouter>
  );
};
