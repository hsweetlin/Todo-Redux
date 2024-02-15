import React, { useEffect, useState } from "react";
import "./ToDo.scss";

export const ToDo = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<
    { task: string; id: number; completed: boolean }[]
  >([]);

  const [deletedTasks, setDeletedTasks] = useState<
    { task: string; id: number; completed: boolean }[]
  >([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("taskList");
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTaskList([...taskList, { task, id: taskList.length, completed: false }]);
    setTask("");
    console.log("success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleCheckChange = (taskId: any) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((item) =>
        item.id === taskId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDelete = (taskId: number) => {
    const deletedTask = taskList.find((item) => item.id === taskId);
    if (deletedTask) {
      setTaskList((prevTaskList) =>
        prevTaskList.filter((item) => item.id !== taskId)
      );
      setDeletedTasks((prevDeletedTasks) => [...prevDeletedTasks, deletedTask]);
    }
  };

  const handleUndoDelete = () => {
    if (deletedTasks.length > 0) {
      const lastDeletedTask = deletedTasks[deletedTasks.length - 1];
      setTaskList((prevTaskList) => [...prevTaskList, lastDeletedTask]);
      setDeletedTasks((prevDeletedTasks) => prevDeletedTasks.slice(0, -1));
    }
  };

  return (
    <>
      <h1>To-Do list</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={task}></input>
        <button type="submit">Add</button>
      </form>
      <ul>
        {taskList.map((item) => (
          <li
            className="task-list"
            key={item.id}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              onChange={() => handleCheckChange(item.id)}
              checked={item.completed}
            ></input>
            {item.task}
            <button onClick={() => handleDelete(item.id)}>delete</button>
          </li>
        ))}
      </ul>
      {deletedTasks.length > 0 && (
        <div>
          <button onClick={handleUndoDelete}>Undo Delete</button>
          <button>cancel</button>
        </div>
      )}
    </>
  );
};
