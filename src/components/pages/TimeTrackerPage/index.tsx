import { FC } from "react";
import { useTaskContext } from "../../../contexts/TaskContext";
import { useTimerContext } from "../../../contexts/TimerContext";
import { Button } from "../../atoms/Button";
import { Time } from "../../atoms/Time";
import { TaskLabel } from "../../molecules/TaskLabel";

export const TimeTrackerPage: FC = () => {
  const { title } = useTaskContext();
  const { seconds, minutes, hours, ...timer } = useTimerContext();

  return (
    <div className="time-tracker">
      <TaskLabel />
      <Time seconds={seconds} minutes={minutes} hours={hours} />
      {timer.status === "idle" && (
        <Button primary label="Start" onClick={timer.start} />
      )}
      {timer.status === "started" && (
        <Button primary label="Pause" onClick={timer.pause} />
      )}
      {timer.status === "paused" && (
        <Button primary label="Resume" onClick={timer.resume} />
      )}
      {(timer.status === "started" || timer.status === "paused") && (
        <Button label="Stop" onClick={timer.stop} />
      )}
      {timer.status === "stopped" && (
        <>
          Well done! Today you spent {`${hours}:${minutes}:${seconds}`} on{" "}
          {title}
        </>
      )}
    </div>
  );
};
