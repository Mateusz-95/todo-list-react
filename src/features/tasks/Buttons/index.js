import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, doneAllTasks }) => {
  return (
    <ButtonsContainer>
      {tasks.length > 0 && (
        <>
          <Button onClick={toggleHideDone}>
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
          </Button>
          <Button
            disabled={tasks.every((task) => task.done)}
            onClick={doneAllTasks}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonsContainer>
  );
};

export default Buttons;
