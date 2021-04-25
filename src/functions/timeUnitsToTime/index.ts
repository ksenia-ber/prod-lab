import { TimeUnits } from "../timeToTimeUnits";

export const timeUnitsToTime = ({
  seconds,
  minutes,
  hours,
}: TimeUnits): number => {
  return ((hours * 60 + minutes) * 60 + seconds) * 1_000;
};
