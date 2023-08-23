import {
  StyleSheetManager,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import Form from "./Form";
import TasksList from "./TasksList";
import Search from "./Search/index";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container";

export const theme = {
  colors: {
    normal: "hsl(180, 100%, 25%)",
    hover: "hsl(180, 100%, 35%)",
    active: "hsl(180, 100%, 40%)",
  },
};

export const GlobalStyles = createGlobalStyle`
html {
box-sizing: border-box;
font-family: 'Lato', sans-serif;
}

*,
::after,
::before {
box-sizing: inherit;
}

body {
background-color: #f0f0f0;
}
`;

function TasksPage() {
  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <GlobalStyles />
        <Container>
          <Header title="Lista zadań" />
          <Section title="Dodaj nowe zadanie" body={<Form />} />
          <Section title="Wyszukiwarka" body={<Search />} />
          <Section
            title="Lista zadań"
            extraHeaderContent={<Buttons />}
            body={<TasksList />}
          />
        </Container>
      </StyleSheetManager>
    </ThemeProvider>
  );
}

export default TasksPage;
