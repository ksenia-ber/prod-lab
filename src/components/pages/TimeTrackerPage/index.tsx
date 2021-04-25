import { FC, useCallback } from "react";
import { useTaskContext } from "../../../contexts/TaskContext";
import { useTimerContext } from "../../../contexts/TimerContext";
import { Button } from "../../atoms/Button";
import { EditableLabel } from "../../atoms/EditableLabel";
import { Time } from "../../atoms/Time";
import "./index.css";

export const TimeTrackerPage: FC = () => {
  const { title, setTitle, resetTitle } = useTaskContext();
  const { seconds, minutes, hours, ...timer } = useTimerContext();

  const handleStartAgain = useCallback(() => {
    if (timer.status === "stopped") {
      timer.reset();
    }
    resetTitle();
  }, [timer, resetTitle]);

  return (
    <div className="time-tracker">
      {timer.status !== "stopped" && (
        <>
          <p className="time-tracker-header">
            <EditableLabel text={title} setText={setTitle} />
          </p>
          <Time
            seconds={seconds}
            minutes={minutes}
            hours={hours}
            size="large"
          />
          <div className="button-container">
            {timer.status === "idle" && (
              <Button primary label="Start" onClick={timer.start} />
            )}
            {timer.status === "started" && (
              <>
                <Button primary label="Pause" onClick={timer.pause} />
                <Button label="Stop" onClick={timer.stop} />
              </>
            )}
            {timer.status === "paused" && (
              <>
                <Button primary label="Resume" onClick={timer.resume} />
                <Button label="Stop" onClick={timer.stop} />
              </>
            )}
          </div>
        </>
      )}
      {timer.status === "stopped" && (
        <>
          <p className="time-tracker-header--stopped">Well done!</p>
          <p className="time-tracker-subheader--stopped">Today you spent</p>
          <Time
            seconds={seconds}
            minutes={minutes}
            hours={hours}
            size="small"
          />
          <p className="task-title">on {title}</p>
          <div className="button-container">
            <Button label="Start again" onClick={handleStartAgain} />
          </div>
        </>
      )}
    </div>
  );
};
