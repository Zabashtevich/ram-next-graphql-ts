import { range } from "../../utils";

describe("range", () => {
  test("returning array of number", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(1, 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(range(1, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
