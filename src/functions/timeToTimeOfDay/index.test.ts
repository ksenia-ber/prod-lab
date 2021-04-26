import { TimeOfDay, timeToTimeOfDay } from ".";

describe(timeToTimeOfDay.name, () => {
  test("returns night for 4:59", () => {
    const date = new Date();
    date.setHours(4);
    date.setMinutes(59);

    const actual = timeToTimeOfDay(date.getTime());
    const expected: TimeOfDay = "night";

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns morning for 5:00", () => {
    const date = new Date();
    date.setHours(5);
    date.setMinutes(0);

    const actual = timeToTimeOfDay(date.getTime());
    const expected: TimeOfDay = "morning";

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns morning for 11:59", () => {
    const date = new Date();
    date.setHours(11);
    date.setMinutes(59);

    const actual = timeToTimeOfDay(date.getTime());
    const expected: TimeOfDay = "morning";

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns afternoon for 12:00", () => {
    const date = new Date();
    date.setHours(12);
    date.setMinutes(0);

    const actual = timeToTimeOfDay(date.getTime());
    const expected: TimeOfDay = "afternoon";

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns afternoon for 17:59", () => {
    const date = new Date();
    date.setHours(17);
    date.setMinutes(59);

    const actual = timeToTimeOfDay(date.getTime());
    const expected: TimeOfDay = "afternoon";

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns evening for 18:00", () => {
    const date = new Date();
    date.setHours(18);
    date.setMinutes(0);

    const actual = timeToTimeOfDay(date.getTime());
    const expected: TimeOfDay = "evening";

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns evening for 22:59", () => {
    const date = new Date();
    date.setHours(22);
    date.setMinutes(59);

    const actual = timeToTimeOfDay(date.getTime());
    const expected: TimeOfDay = "evening";

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns night for 23:00", () => {
    const date = new Date();
    date.setHours(23);
    date.setMinutes(0);

    const actual = timeToTimeOfDay(date.getTime());
    const expected: TimeOfDay = "night";

    expect(actual).toEqual<typeof actual>(expected);
  });
});
