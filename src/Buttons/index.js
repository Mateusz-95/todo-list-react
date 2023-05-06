import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => {
    return (
        <div className="section__buttonsContainer">
            {tasks.length === 0 ? null : (
                <React.Fragment>
                    <button className="section__button">
                        {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </button>
                    <button
                        className="section__button"
                        disabled={tasks.every((task) => task.done)}
                    >
                        Ukończ wszystkie
                    </button>
                </React.Fragment>
            )}
        </div>
    );
};

export default Buttons;

