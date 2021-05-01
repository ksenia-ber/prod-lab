import { randomiser } from ".";

describe(randomiser.name, () => {
  test("has method next", () => {
    const actual = randomiser([]);

    expect(typeof actual.next === "function").toEqual(true);
  });

  test("does NOT repeat 2 elements in a row", () => {
    const { next } = randomiser([1, 2]);

    const [a, b] = [next(), next()];

    expect(a !== b).toEqual(true);
  });

  test("does NOT repeat 3 elements in a row", () => {
    const { next } = randomiser([1, 2, 3]);

    const [a, b, c] = [next(), next(), next()];

    expect(a !== b).toEqual(true);
    expect(b !== c).toEqual(true);
    expect(c !== a).toEqual(true);
  });

  test("does NOT repeat 4 elements in a row", () => {
    const { next } = randomiser([1, 2, 3, 4]);

    const [a, b, c, d] = [next(), next(), next(), next()];

    expect(a !== b).toEqual(true);
    expect(b !== c).toEqual(true);
    expect(c !== d).toEqual(true);
    expect(d !== a).toEqual(true);

    expect(a !== c).toEqual(true);
    expect(b !== d).toEqual(true);
  });
});
