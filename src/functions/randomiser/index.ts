export interface Randomiser<T> {
  getCurrent(): T;
  next(): T;
}

export const randomiser = <T>(list: T[]): Randomiser<T> => {
  const shuffleIndices: number[] = [];
  for (let index = 0; index < list.length; index++) {
    shuffleIndices.push(index);
  }

  let currentIndex = 0;
  const getCurrent = () => {
    const shuffleIndex = shuffleIndices[currentIndex];
    const current = list[shuffleIndex];
    return current;
  };

  const next = (): T => {
    currentIndex = (currentIndex + 1) % list.length;
    return getCurrent();
  };

  return {
    getCurrent,
    next,
  };
};
