/* eslint-disable react-hooks/rules-of-hooks  */
import { createContext, useCallback, useContext, useState } from "react";
import { noop } from "../../functions/noop";
import { ContextReducerParams } from "../ContextReducer";

export interface TaskContextType {
  title: string;
  setTitle: (title: string) => void;
  resetTitle: VoidFunction;
}

export const DEFAULT_TASK_CONTEXT_VALUE: TaskContextType = {
  title: "Task",
  setTitle: noop,
  resetTitle: noop,
};

export const TaskContext = createContext<TaskContextType>(
  DEFAULT_TASK_CONTEXT_VALUE
);

export const reduceTaskContext = (_: ContextReducerParams): TaskContextType => {
  const [title, setTitle] = useState(DEFAULT_TASK_CONTEXT_VALUE.title);

  const resetTitle = useCallback(() => {
    setTitle(DEFAULT_TASK_CONTEXT_VALUE.title);
  }, []);

  return { title, setTitle, resetTitle };
};

export const useTaskContext = () => useContext(TaskContext);
