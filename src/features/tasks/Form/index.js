import React, { useRef, useState } from "react";
import { Button, FormContainer, Input } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = ({ addNewTask }) => {
  const inputRef = useRef(null);

  const [newTaskContent, setNewTaskContent] = useState("");

  const focusOnInput = () => inputRef.current.focus();

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (event.target.value !== "") {
      dispatch(
        addTask({
          id: nanoid(),
          content: newTaskContent.trim(),
          done: false,
        })
      );

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
