import "./style.css";
import { List, Item, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <button
          onClick={() => toggleTaskDone(task.id)}
          className="list__done list__buttons"
        >
          {task.done ? "✅" : "🟩"}
        </button>
        <Content done={task.done}>{task.content}</Content>
        <button
          className="list__remove list__buttons"
          onClick={() => removeTask(task.id)}
        >
          🗑️
        </button>
      </Item>
    ))}
  </List>
);

export default Tasks;
