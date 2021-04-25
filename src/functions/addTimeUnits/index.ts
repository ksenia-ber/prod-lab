import { timeToTimeUnits, TimeUnits } from "../timeToTimeUnits";
import { timeUnitsToTime } from "../timeUnitsToTime";

export const addTimeUnits = (
  firstTimeUnits: TimeUnits,
  secondTimeUnits: TimeUnits
): TimeUnits => {
  const firstTime = timeUnitsToTime(firstTimeUnits);
  const secondTime = timeUnitsToTime(secondTimeUnits);
  return timeToTimeUnits(firstTime + secondTime);
};
