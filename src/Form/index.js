import React, { useRef, useState } from "react";
import { Button, FormContainer, Input } from "./styled";

const Form = ({ addNewTask }) => {
  const inputRef = useRef(null);

  const [newTaskContent, setNewTaskContent] = useState("");

  const focusOnInput = () => inputRef.current.focus();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (event.target.value !== "") {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
      focusOnInput();
    } else {
      return;
    }
  };

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormContainer>
  );
};
export default Form;
