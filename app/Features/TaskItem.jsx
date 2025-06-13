"use client";
import React from "react";
import { useTask } from "../Context/TaskContent";

const TaskItem = ({ task, index }) => {
  const { mainTask, setMainTask, setSelectedTask } = useTask();

  const toggleCompletion = () => {
    const updated = mainTask.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setMainTask(updated);
  };

  const deleteTask = () => {
    const updated = mainTask.filter((_, i) => i !== index);
    setMainTask(updated);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-600 font-semibold";
      case "Medium":
        return "text-yellow-600 font-semibold";
      case "Low":
        return "text-green-600 font-semibold";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div
      className={`flex items-center justify-between bg-white p-4 m-2 rounded shadow-md border border-gray-300 ${
        task.completed ? "opacity-60 line-through" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleCompletion}
          className="w-5 h-5 mt-1"
        />
        <div>
          <h3 className="text-xl font-bold">{task.title}</h3>
          <p className="text-gray-700">{task.description}</p>
          <p className={getPriorityColor(task.priority)}>
            Priority: {task.priority}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setSelectedTask({ ...task, index })}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={deleteTask}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
