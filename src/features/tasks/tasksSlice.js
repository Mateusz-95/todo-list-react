import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
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
export default tasksSlice.reducer;
