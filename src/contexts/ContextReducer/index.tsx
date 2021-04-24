import { FC } from "react";
import { createContextReducer } from "../../functions/contextReducer";
import { TaskContext, reduceTaskContext } from "../TaskContext";

export interface ContextReducerParams {}

const contextComposition: FC<ContextReducerParams>[] = [];

export const ContextReducer = createContextReducer(contextComposition);
