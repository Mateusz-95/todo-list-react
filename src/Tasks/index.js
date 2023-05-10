import "./style.css";

const Tasks = ({tasks, hideDone}) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id}
                className={`list__item 
                ${hideDone && task.done
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