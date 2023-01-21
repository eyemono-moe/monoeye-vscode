import { flatten } from "../../src/utils/util";

describe("flatten", () => {
  test("should flatten an object", () => {
    const target = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: 4,
        },
      },
    };
    const expected = {
      a: 1,
      "b.c": 2,
      "b.d.e": 3,
      "b.d.f": 4,
    };
    expect(flatten(target)).toEqual(expected);
  });
});
