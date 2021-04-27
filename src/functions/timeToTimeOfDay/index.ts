export type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

export const timeToTimeOfDay = (time: number): TimeOfDay => {
  const date = new Date(time);
  const hours = date.getHours();

  if (hours < 5) {
    return "night";
  }

  if (hours < 12) {
    return "morning";
  }

  if (hours < 18) {
    return "afternoon";
  }

  if (hours < 23) {
    return "evening";
  }

  return "night";
};
