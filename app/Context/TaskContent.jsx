"use client";
import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [mainTask, setMainTask] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filters, setFilters] = useState({ status: "all", sort: "none" });

  return (
    <TaskContext.Provider
      value={{
        mainTask,
        setMainTask,
        selectedTask,
        setSelectedTask,
        filters,
        setFilters,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
