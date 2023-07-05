import { useEffect, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { useTasks } from "./useTasks";

function App() {
  const { tasks, removeTask, toggleTaskDone, doneAllTasks, addNewTask } =
    useTasks();

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      {
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
              <Tasks
                toggleTaskDone={toggleTaskDone}
                tasks={tasks}
                hideDone={hideDone}
                removeTask={removeTask}
              />
            }
          />
        </Container>
      }
    </StyleSheetManager>
  );
}

export default App;
