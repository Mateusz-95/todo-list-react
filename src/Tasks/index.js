import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id}
                className={`list__item 
                ${hideDoneTasks && task.done
                        ? "list__item--hide"
                        : ""}
                    `}
            >
                <button className="list__done list__buttons">
                    {task.done ? "✅" : "🟩"}
                </button >
                <div className={`${task.done ? "list__content" : ""}`}>
                    {task.content}
                </div>
                <button className="list__remove list__buttons">
                    🗑️
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;