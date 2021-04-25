import { FC } from "react";
import { useTaskContext } from "../../../contexts/TaskContext";
import { useTimerContext } from "../../../contexts/TimerContext";
import { Button } from "../../atoms/Button";
import { EditableLabel } from "../../atoms/EditableLabel";
import { Time } from "../../atoms/Time";

export const TimeTrackerPage: FC = () => {
  const { title, setTitle } = useTaskContext();
  const { seconds, minutes, hours, ...timer } = useTimerContext();

  return (
    <div className="time-tracker">
      {timer.status !== "stopped" && (
        <>
          <EditableLabel text={title} setText={setTitle} />
          <Time
            seconds={seconds}
            minutes={minutes}
            hours={hours}
            size="large"
          />
        </>
      )}
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
          <h1>Well done!</h1>
          <p>Today you spent</p>
          <Time
            seconds={seconds}
            minutes={minutes}
            hours={hours}
            size="small"
          />
          <p>on {title}</p>
          <Button label="Back" onClick={timer.reset} />
        </>
      )}
    </div>
  );
};
