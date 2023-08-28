import { List, Item, Content, Button, ContentLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import { useQueryParameter } from "../../../../queryParameters";

import { ThemeProvider } from "styled-components";
import { theme } from "../../TaskPage";
import { searchQueryParamName } from "../../../../searchQueryParamName";

const TasksList = () => {
  const query = useQueryParameter(searchQueryParamName);

  const hideDone = useSelector(selectHideDone);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));

  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <List>
        {tasks.map((task) => (
          <Item key={task.id} hidden={task.done && hideDone}>
            <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
              {task.done ? "✅" : "🟩"}
            </Button>
            <Content done={task.done}>
              <ContentLink to={`/zadania/${task.id}`}>
                {task.content}
              </ContentLink>
            </Content>
            <Button remove onClick={() => dispatch(removeTask(task.id))}>
              🗑️
            </Button>
          </Item>
        ))}
      </List>
    </ThemeProvider>
  );
};

export default TasksList;
