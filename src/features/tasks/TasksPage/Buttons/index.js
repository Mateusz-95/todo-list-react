import { ButtonsContainer, Button } from "../../styledForButtons/styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleHideDone, setAllDone } from "../../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);

  const dispatch = useDispatch();

  return (
    <ButtonsContainer>
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
