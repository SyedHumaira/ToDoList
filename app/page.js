"use client";
import React from "react";
import TaskForm from "./Features/TaskForm";
import TaskItem from "./Features/TaskItem";
import Sidebar from "./Components/Sidebar";
import { useTask } from "./Context/TaskContent";
import { sortByPriority } from "./Features/TaskUtil";

const Page = () => {
  const { mainTask, filters, setFilters } = useTask(); // ⬅ Make sure setFilters is included

  const filteredTasks = mainTask.filter((task) => {
    if (filters.status === "completed") return task.completed;
    if (filters.status === "pending") return !task.completed;
    return true;
  });

  const sortedTasks =
    filters.sort === "priority" ? sortByPriority(filteredTasks) : filteredTasks;

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        My ToDo List
      </h1>

      <TaskForm />
      <hr />

      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4 p-4 bg-slate-200 rounded-lg m-5">
          {sortedTasks.length === 0 ? (
            <h2 className="text-xl text-center text-gray-600">
              {filters.status === "completed"
                ? "No completed tasks found"
                : filters.status === "pending"
                ? "No pending tasks found"
                : "No tasks found"}
            </h2>
          ) : (
            sortedTasks.map((task, index) => (
              <TaskItem key={index} task={task} index={index} />
            ))
          )}
        </div>

        <div className="md:w-1/4 p-4">
          <Sidebar
            selectedTask={null}
            setSelectedTask={() => {}}
            updateTask={() => {}}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
