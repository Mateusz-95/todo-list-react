import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container";
import {
  StyleSheetManager,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { useTasks } from "../../useTasks";

const theme = {
  colors: {
    normal: "hsl(180, 100%, 25%)",
    hover: "hsl(180, 100%, 35%)",
    active: "hsl(180, 100%, 40%)",
  },
};

const GlobalStyles = createGlobalStyle`
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

function Tasks() {
  const {
    tasks,
    removeTask,
    toggleTaskDone,
    doneAllTasks,
    addNewTask,
    hideDone,
    toggleHideDone,
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <GlobalStyles />
        <Container>
          <Header title="Lista zadań" />
          <Section
            title="Dodaj nowe zadanie"
            body={<Form addNewTask={addNewTask} />}
          />
          <Section
            title="Lista zadań"
            extraHeaderContent={
              <Buttons
                tasks={tasks}
                hideDone={hideDone}
                toggleHideDone={toggleHideDone}
                doneAllTasks={doneAllTasks}
              />
            }
            body={
              <TasksList
                toggleTaskDone={toggleTaskDone}
                tasks={tasks}
                hideDone={hideDone}
                removeTask={removeTask}
              />
            }
          />
        </Container>
      </StyleSheetManager>
    </ThemeProvider>
  );
}

export default Tasks;
