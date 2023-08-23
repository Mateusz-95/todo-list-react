import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/tasks/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import { StyledNavLink } from "./styled";

export const App = () => {
  return (
    <HashRouter>
      <nav>
        <ul>
          <li>
            <StyledNavLink activeClassName="active" to="/zadania">
              Zadania
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/autor">O autorze</StyledNavLink>
          </li>
        </ul>
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
    </HashRouter>
  );
};
