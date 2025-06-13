"use client";
import { TaskProvider } from "./TaskContent";

export default function Providers({ children }) {
  return <TaskProvider>{children}</TaskProvider>;
}
