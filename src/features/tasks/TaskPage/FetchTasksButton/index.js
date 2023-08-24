import { Button } from "../../TasksPage/Buttons/styled";
import { fetchExampleTasks } from "../../tasksSlice";
import { useDispatch } from "react-redux";

const FetchTasksButton = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </Button>
  );
};

export default FetchTasksButton;
