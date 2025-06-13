export const sortByPriority = (tasks) => {
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  return [...tasks].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );
};
