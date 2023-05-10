import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, doneAllTasks }) => {
    return (
        <div className="buttons">
            {tasks.length > 0 && (
                <>
                    <button onClick={toggleHideDone} className="buttons__button">
                        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </button>
                    <button
                        className="buttons__button"
                        disabled={tasks.every((task) => task.done)}
                        onClick={doneAllTasks} 
                    >
                        Ukończ wszystkie
                    </button>
                </>
            )}

        </div>
    );
};

export default Buttons;

