import { useState, useEffect } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("storedTasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("storedTasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    removeTask,
  };
};
