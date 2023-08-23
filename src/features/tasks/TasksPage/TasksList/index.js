import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import { Link, useLocation } from "react-router-dom";

const TasksList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("szukaj");

  const hideDone = useSelector(selectHideDone);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✅" : "🟩"}
          </Button>
          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
