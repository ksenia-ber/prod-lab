import { FC } from "react";
import { createContextReducer } from "../../functions/contextReducer";
import { AuthContext, reduceAuthContext } from "../AuthContext";
import { TaskContext, reduceTaskContext } from "../TaskContext";
import { reduceTimerContext, TimerContext } from "../TimerContext";

export interface ContextReducerParams {}

const contextComposition: FC<ContextReducerParams>[] = [
  (props) => (
    <TaskContext.Provider
      value={reduceTaskContext(props)}
      children={props.children}
    />
  ),
  (props) => (
    <TimerContext.Provider
      value={reduceTimerContext(props)}
      children={props.children}
    />
  ),
  (props) => (
    <AuthContext.Provider
      value={reduceAuthContext(props)}
      children={props.children}
    />
  ),
];

export const ContextReducer = createContextReducer(contextComposition);
