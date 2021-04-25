import { timeUnitsToTime } from ".";

describe(timeUnitsToTime.name, () => {
  test("parses 1 second", () => {
    const actual = timeUnitsToTime({ seconds: 1, minutes: 0, hours: 0 });
    const expected = 1_000;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 59 seconds", () => {
    const actual = timeUnitsToTime({ seconds: 59, minutes: 0, hours: 0 });
    const expected = 59_000;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 1 minute", () => {
    const actual = timeUnitsToTime({ seconds: 0, minutes: 1, hours: 0 });
    const expected = 60_000;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 59 minutes", () => {
    const actual = timeUnitsToTime({ seconds: 0, minutes: 59, hours: 0 });
    const expected = 3_540_000;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 59 minutes 59 seconds", () => {
    const actual = timeUnitsToTime({ seconds: 59, minutes: 59, hours: 0 });
    const expected = 3_599_000;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 1 hour", () => {
    const actual = timeUnitsToTime({ seconds: 0, minutes: 0, hours: 1 });
    const expected = 3_600_000;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 1 hour 59 minutes", () => {
    const actual = timeUnitsToTime({ seconds: 0, minutes: 59, hours: 1 });
    const expected = 7_140_000;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 1 hour 59 minutes 59 seconds", () => {
    const actual = timeUnitsToTime({ seconds: 59, minutes: 59, hours: 1 });
    const expected = 7_199_000;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 9 hours 59 minutes 59 seconds", () => {
    const actual = timeUnitsToTime({ seconds: 59, minutes: 59, hours: 9 });
    const expected = 35_999_000;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 9 hours 59 minutes 59 seconds", () => {
    const actual = timeUnitsToTime({ seconds: 59, minutes: 59, hours: 99 });
    const expected = 359_999_000;

    expect(actual).toEqual<typeof actual>(expected);
  });
});
