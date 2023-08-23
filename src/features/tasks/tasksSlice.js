import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: (previousState, { payload: task }) => {
      previousState.tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, { payload: taskId }) => {
      const index = state.tasks.findIndex((task) => task.id === taskId);
      state.tasks[index].done = !state.tasks[index].done;
    },
    setAllDone: (state) => {
      state.tasks = state.tasks.map((task) => ({
        ...task,
        done: true,
      }));
    },
    removeTask: (state, { payload: taskId }) => {
      const index = state.tasks.findIndex((task) => task.id === taskId);
      state.tasks.splice(index, 1);
    },
    fetchExampleTasks: (state, action) => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  removeTask,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;

export const selectHideDone = (state) => state.hideDone;

export const selectTasks = (state) => selectTasksState(state).tasks;

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);
  if (!query || query.trim() === "") {
    return tasks;
  }
  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
