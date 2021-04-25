import { timeToTimeUnits, TimeUnits } from ".";

describe(timeToTimeUnits.name, () => {
  test("parses 1 second", () => {
    const actual = timeToTimeUnits(1_000);
    const expected: TimeUnits = { seconds: 1, minutes: 0, hours: 0 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 59 seconds", () => {
    const actual = timeToTimeUnits(59_000);
    const expected: TimeUnits = { seconds: 59, minutes: 0, hours: 0 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 1 minute", () => {
    const actual = timeToTimeUnits(60_000);
    const expected: TimeUnits = { seconds: 0, minutes: 1, hours: 0 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 59 minutes", () => {
    const actual = timeToTimeUnits(3_540_000);
    const expected: TimeUnits = { seconds: 0, minutes: 59, hours: 0 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 59 minutes 59 seconds", () => {
    const actual = timeToTimeUnits(3_599_000);
    const expected: TimeUnits = { seconds: 59, minutes: 59, hours: 0 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 1 hour", () => {
    const actual = timeToTimeUnits(3_600_000);
    const expected: TimeUnits = { seconds: 0, minutes: 0, hours: 1 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 1 hour 59 minutes", () => {
    const actual = timeToTimeUnits(7_140_000);
    const expected: TimeUnits = { seconds: 0, minutes: 59, hours: 1 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 1 hour 59 minutes 59 seconds", () => {
    const actual = timeToTimeUnits(7_199_000);
    const expected: TimeUnits = { seconds: 59, minutes: 59, hours: 1 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 9 hours 59 minutes 59 seconds", () => {
    const actual = timeToTimeUnits(35_999_000);
    const expected: TimeUnits = { seconds: 59, minutes: 59, hours: 9 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("parses 9 hours 59 minutes 59 seconds", () => {
    const actual = timeToTimeUnits(359_999_000);
    const expected: TimeUnits = { seconds: 59, minutes: 59, hours: 99 };

    expect(actual).toEqual<typeof actual>(expected);
  });
});
