import { Button } from "../../styledForButtons/styled";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const FetchTasksButton = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  if (!isLoading)
    return (
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
    );

  if (isLoading) return <Button disabled={true}>Ładowanie</Button>;
};

export default FetchTasksButton;
