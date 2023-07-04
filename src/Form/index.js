import React, { useState } from "react";
import { Button, FormContainer, Input } from "./styled";

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
    <FormContainer onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormContainer>
  );
};
export default Form;
