import "./style.css";
import React, { useState } from "react";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (event.target.value !== "") {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
    } else {
      return;
    }
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
           
        placeholder="Co jest do zrobienia?"
        className="form__input"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  )
};
export default Form;