import { clamp } from "../clamp";

export interface TimeUnits {
  seconds: number;
  minutes: number;
  hours: number;
}

export const timeToTimeUnits = (time: number): TimeUnits => {
  const timeInSeconds = Math.floor(time / 1_000);
  const timeInMinutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - timeInMinutes * 60;
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes - hours * 60;

  return { seconds, minutes, hours };
};
