/* eslint-disable react-hooks/rules-of-hooks */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { addTimeUnits } from "../../functions/addTimeUnits";
import { noop } from "../../functions/noop";
import { timeToTimeUnits, TimeUnits } from "../../functions/timeToTimeUnits";
import { ContextReducerParams } from "../ContextReducer";

interface InitialStateType extends TimeUnits {
  status: "idle";
  start: VoidFunction;
}

interface StartedStateType extends TimeUnits {
  status: "started";
  pause: VoidFunction;
  stop: VoidFunction;
}

interface PausedStateType extends TimeUnits {
  status: "paused";
  resume: VoidFunction;
  stop: VoidFunction;
}

interface StoppedStateType extends TimeUnits {
  status: "stopped";
  reset: VoidFunction;
}

export type TimerContextType =
  | InitialStateType
  | StartedStateType
  | PausedStateType
  | StoppedStateType;

export const DEFAULT_TIMER_CONTEXT_VALUE: TimerContextType = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  status: "idle",
  start: noop,
};

export const TimerContext = createContext<TimerContextType>(
  DEFAULT_TIMER_CONTEXT_VALUE
);

export const reduceTimerContext = (
  _: ContextReducerParams
): TimerContextType => {
  const [state, setState] = useState<TimerContextType>(
    DEFAULT_TIMER_CONTEXT_VALUE
  );
  const startDateRef = useRef<number>();
  const intervalRef = useRef<number>();
  const resetRef = useRef<VoidFunction>(noop);
  const startRef = useRef<VoidFunction>(noop);
  const pauseRef = useRef<VoidFunction>(noop);
  const resumeRef = useRef<VoidFunction>(noop);
  const stopRef = useRef<VoidFunction>(noop);

  resetRef.current = useCallback(() => {
    if (state.status !== "stopped") {
      throw new Error(`Cannot reset from status ${state.status}`);
    }

    setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
      status: "idle",
      start: () => startRef.current(),
    });
  }, [state.status]);

  startRef.current = useCallback(() => {
    if (state.status !== "idle") {
      throw new Error(`Cannot start from status ${state.status}`);
    }

    startDateRef.current = Date.now();
    intervalRef.current = window.setInterval(() => {
      setState((state) => ({
        ...state,
        ...addTimeUnits(state, timeToTimeUnits(1_000)),
      }));
    }, 1_000);

    setState((state) => ({
      ...state,
      status: "started",
      stop: () => stopRef.current(),
      pause: () => pauseRef.current(),
    }));
  }, [state.status]);

  stopRef.current = useCallback(() => {
    if (state.status !== "started" && state.status !== "paused") {
      throw new Error(`Cannot stop from status ${state.status}`);
    }

    startDateRef.current = undefined;
    clearInterval(intervalRef.current);
    intervalRef.current = undefined;

    setState((state) => ({
      ...state,
      status: "stopped",
      reset: () => resetRef.current(),
    }));
  }, [state.status]);

  pauseRef.current = useCallback(() => {
    if (state.status !== "started") {
      throw new Error(`Cannot pause from status ${state.status}`);
    }

    clearInterval(intervalRef.current);
    intervalRef.current = undefined;

    setState((state) => ({
      ...state,
      status: "paused",
      resume: () => resumeRef.current(),
      stop: () => stopRef.current(),
    }));
  }, [state.status]);

  resumeRef.current = useCallback(() => {
    if (state.status !== "paused") {
      throw new Error(`Cannot resume from status ${state.status}`);
    }

    intervalRef.current = window.setInterval(() => {
      setState((state) => ({
        ...state,
        ...addTimeUnits(state, timeToTimeUnits(1_000)),
      }));
    }, 1_000);

    setState((state) => ({
      ...state,
      status: "started",
      stop: () => stopRef.current(),
      pause: () => pauseRef.current(),
    }));
  }, [state.status]);

  useEffect(() => {
    setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
      status: "idle",
      start: () => startRef.current(),
    });
  }, []);

  return state;
};

export const useTimerContext = () => useContext(TimerContext);
