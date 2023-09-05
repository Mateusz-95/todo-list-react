import { StyleSheetManager, ThemeProvider } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import Form from "./Form";
import TasksList from "./TasksList";
import Search from "./Search/index";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container";
import FetchTasksButton from "./FetchTasksButton";
import { theme } from "../../../theme";
import { GlobalStyles } from "../../../globalStyles";
function TasksPage() {
  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <GlobalStyles />
        <Container>
          <Header title="Lista zadań" />
          <Section
            title="Dodaj nowe zadanie"
            extraHeaderContent={<FetchTasksButton />}
            body={<Form />}
          />
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
