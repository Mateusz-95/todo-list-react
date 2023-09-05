import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/tasks/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Navigation from "./common/Navigation";

export const App = () => {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Navigation />
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
      </ThemeProvider>
    </HashRouter>
  );
};
