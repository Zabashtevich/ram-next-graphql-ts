import { getPaginationOffset } from "../../utils";

describe("getPaginationOffset", () => {
  test("return correct pagination offset", () => {
    expect(getPaginationOffset(5, 10)).toEqual([0, 10]);
    expect(getPaginationOffset(2, 30)).toEqual([0, 10]);
    expect(getPaginationOffset(10, 30)).toEqual([5, 15]);
    expect(getPaginationOffset(15, 30)).toEqual([10, 20]);
    expect(getPaginationOffset(25, 30)).toEqual([20, 30]);
    expect(getPaginationOffset(27, 30)).toEqual([20, 30]);
    expect(getPaginationOffset(29, 30)).toEqual([20, 30]);
  });
});
