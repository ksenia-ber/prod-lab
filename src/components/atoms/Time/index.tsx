import { FC } from "react";
import { clamp } from "../../../functions/clamp";
import "./index.css";

export interface TimeProps {
  seconds: number;
  minutes: number;
  hours: number;
  size: "small" | "large";
}

export const Time: FC<TimeProps> = ({ seconds, minutes, hours, size }) => {
  const ss = `${clamp(seconds, 0, 59)}`.padStart(2, "0");
  const mm = `${clamp(minutes, 0, 59)}`.padStart(2, "0");
  const hh = `${clamp(hours, 0, 99)}`.padStart(2, "0");

  return (
    <div
      className={[
        "time",
        size === "small" ? "time--small" : "time--large",
      ].join(" ")}
    >{`${hh}:${mm}:${ss}`}</div>
  );
};
