import { createContext, useState } from "react";
import { ContextReducerParams } from "../ContextReducer";

export interface TaskContextType {
  title: string;
  setTitle: (title: string) => void;
}

export const DEFAULT_TASK_CONTEXT_VALUE: TaskContextType = {
  title: "Task",
  setTitle: () => {
    // nothing
  },
};

export const TaskContext = createContext<TaskContextType>(
  DEFAULT_TASK_CONTEXT_VALUE
);

export const reduceTaskContext = (_: ContextReducerParams) => {
  const [title, setTitle] = useState(DEFAULT_TASK_CONTEXT_VALUE.title);

  return { title, setTitle };
};
