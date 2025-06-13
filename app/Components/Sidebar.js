"use client";
import React, { useState, useEffect } from "react";

const Sidebar = ({ selectedTask, setSelectedTask, updateTask, filters, setFilters }) => {
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDueDate, setEditDueDate] = useState("");
  const [editPriority, setEditPriority] = useState("Medium");
  const [editCategory, setEditCategory] = useState("General");

  useEffect(() => {
    if (selectedTask) {
      setEditTitle(selectedTask.title || "");
      setEditDescription(selectedTask.description || "");
      setEditDueDate(selectedTask.dueDate || "");
      setEditPriority(selectedTask.priority || "Medium");
      setEditCategory(selectedTask.category || "General");
    }
  }, [selectedTask]);

  const handleUpdate = () => {
    if (!selectedTask) return;
    updateTask({
      ...selectedTask,
      title: editTitle,
      description: editDescription,
      dueDate: editDueDate,
      priority: editPriority,
      category: editCategory,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-80 border border-gray-300">
      <h2 className="text-xl font-bold mb-4 text-center">Sidebar</h2>

      {/* Filters */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Filter Tasks</h3>
        <select
          className="w-full border p-2 mb-2"
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
        <select
          className="w-full border p-2"
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        >
          <option value="none">No Sort</option>
          <option value="priority">Sort by Priority</option>
        </select>
      </div>

      {/* Edit Task Form */}
      {selectedTask && (
        <div>
          <h3 className="font-semibold mb-2">Edit Task</h3>
          <input
            type="text"
            className="w-full border p-2 mb-2"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            className="w-full border p-2 mb-2"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Description"
          />
          <input
            type="date"
            className="w-full border p-2 mb-2"
            value={editDueDate}
            onChange={(e) => setEditDueDate(e.target.value)}
          />
          <select
            className="w-full border p-2 mb-2"
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <input
            type="text"
            className="w-full border p-2 mb-4"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            placeholder="Category (e.g. Work, Personal)"
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setSelectedTask(null)}
              className="bg-gray-400 text-white px-3 py-1 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
