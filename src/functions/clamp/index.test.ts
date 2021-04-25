import { clamp } from ".";

describe(clamp.name, () => {
  test("returns to", () => {
    const actual = clamp(60, 0, 50);
    const expected = 50;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns from", () => {
    const actual = clamp(-10, 0, 50);
    const expected = 0;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns value", () => {
    const actual = clamp(20, 0, 50);
    const expected = 20;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns NaN", () => {
    const actual = clamp(NaN, 0, 50);
    const expected = NaN;

    expect(actual).toEqual<typeof actual>(expected);
  });
});
