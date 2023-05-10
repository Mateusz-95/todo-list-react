import "./style.css";

const Buttons = ({ tasks, hideDone }) => {
    return (
        <div className="buttons">
            {tasks.length > 0 && (
                <>
                    <button className="buttons__button">
                        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </button>
                    <button
                        className="buttons__button"
                        disabled={tasks.every((task) => task.done)}
                    >
                        Ukończ wszystkie
                    </button>
                </>
            )}

        </div>
    );
};

export default Buttons;

