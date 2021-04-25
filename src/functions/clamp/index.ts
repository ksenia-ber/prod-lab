export const clamp = (value: number, from: number, to: number) => {
  if (value < from) {
    return from;
  }

  if (value > to) {
    return to;
  }

  return value;
};
