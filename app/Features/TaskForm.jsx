"use client";
import React, { useState } from "react";
import { useTask } from "../Context/TaskContent";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const { mainTask, setMainTask } = useTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = { title, description, priority, completed: false };
    setMainTask([...mainTask, newTask]);
    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row justify-center items-center flex-wrap"
    >
      <input
        type="text"
        placeholder="Add a task..."
        className="text-2xl border-zinc-800 border-4 m-3 px-4 py-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Description..."
        className="text-2xl border-zinc-800 border-4 m-3 px-4 py-2 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="text-2xl border-zinc-800 border-4 m-3 px-4 py-2 rounded"
      >
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>
      <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-3">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
