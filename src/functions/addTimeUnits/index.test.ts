import { addTimeUnits } from ".";
import { TimeUnits } from "../timeToTimeUnits";

describe(addTimeUnits.name, () => {
  test("adds 0 and 0", () => {
    const actual = addTimeUnits(
      { seconds: 0, minutes: 0, hours: 0 },
      { seconds: 0, minutes: 0, hours: 0 }
    );
    const expected: TimeUnits = { seconds: 0, minutes: 0, hours: 0 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("adds 59 seconds and  59 seconds", () => {
    const actual = addTimeUnits(
      { seconds: 59, minutes: 0, hours: 0 },
      { seconds: 59, minutes: 0, hours: 0 }
    );
    const expected: TimeUnits = { seconds: 58, minutes: 1, hours: 0 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("adds 59 seconds and  59 seconds", () => {
    const actual = addTimeUnits(
      { seconds: 59, minutes: 0, hours: 0 },
      { seconds: 59, minutes: 0, hours: 0 }
    );
    const expected: TimeUnits = { seconds: 58, minutes: 1, hours: 0 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("adds 1 minute and 59 minutes", () => {
    const actual = addTimeUnits(
      { seconds: 0, minutes: 1, hours: 0 },
      { seconds: 0, minutes: 59, hours: 0 }
    );
    const expected: TimeUnits = { seconds: 0, minutes: 0, hours: 1 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("adds 59 minutes 59 seconds and 1 second", () => {
    const actual = addTimeUnits(
      { seconds: 59, minutes: 59, hours: 0 },
      { seconds: 1, minutes: 0, hours: 0 }
    );
    const expected: TimeUnits = { seconds: 0, minutes: 0, hours: 1 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("adds 1 hour 59 minutes 59 seconds and 1 second", () => {
    const actual = addTimeUnits(
      { seconds: 59, minutes: 59, hours: 1 },
      { seconds: 1, minutes: 0, hours: 0 }
    );
    const expected: TimeUnits = { seconds: 0, minutes: 0, hours: 2 };

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("adds 99 hours 59 minutes 59 seconds and 1 second", () => {
    const actual = addTimeUnits(
      { seconds: 59, minutes: 59, hours: 99 },
      { seconds: 1, minutes: 0, hours: 0 }
    );
    const expected: TimeUnits = { seconds: 0, minutes: 0, hours: 100 };

    expect(actual).toEqual<typeof actual>(expected);
  });
});
