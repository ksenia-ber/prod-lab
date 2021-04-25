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
  start: VoidFunction;
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState<TimerContextType>(
    DEFAULT_TIMER_CONTEXT_VALUE
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const startDateRef = useRef<number>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const intervalRef = useRef<number>();

  let start: VoidFunction;
  let pause: VoidFunction;
  let resume: VoidFunction;
  let stop: VoidFunction;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  start = useCallback(() => {
    if (state.status !== "idle" && state.status !== "stopped") {
      throw new Error(`Cannot start from status ${state.status}`);
    }

    startDateRef.current = Date.now();
    intervalRef.current = setInterval(() => {
      setState((state) => ({
        ...state,
        ...addTimeUnits(state, timeToTimeUnits(1_000)),
      }));
    }, 1_000);

    setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
      status: "started",
      stop,
      pause,
    });
  }, [state]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  stop = useCallback(() => {
    if (state.status !== "started" && state.status !== "paused") {
      throw new Error(`Cannot stop from status ${state.status}`);
    }

    startDateRef.current = undefined;
    clearInterval(intervalRef.current);
    intervalRef.current = undefined;

    setState((state) => ({
      ...state,
      status: "stopped",
      start,
    }));
  }, [state]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  pause = useCallback(() => {
    if (state.status !== "started") {
      throw new Error(`Cannot pause from status ${state.status}`);
    }

    clearInterval(intervalRef.current);
    intervalRef.current = undefined;

    setState((state) => ({
      ...state,
      status: "paused",
      resume,
      stop,
    }));
  }, [state]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  resume = useCallback(() => {
    if (state.status !== "paused") {
      throw new Error(`Cannot resume from status ${state.status}`);
    }

    intervalRef.current = setInterval(() => {
      setState((state) => ({
        ...state,
        ...addTimeUnits(state, timeToTimeUnits(1_000)),
      }));
    }, 1_000);

    setState((state) => ({
      ...state,
      status: "started",
      stop,
      pause,
    }));
  }, [state]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
      status: "idle",
      start,
    });
  }, []);

  return state;
};

export const useTimerContext = () => useContext(TimerContext);
