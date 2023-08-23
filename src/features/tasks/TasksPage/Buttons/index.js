import { ButtonsContainer, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasksState,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
} from "../../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);

  const dispatch = useDispatch();

  return (
    <ButtonsContainer>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
          </Button>
          <Button
            disabled={tasks.every((task) => task.done)}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonsContainer>
  );
};

export default Buttons;
