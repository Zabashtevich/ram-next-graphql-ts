import { stringContains } from "../../utils";

describe("stringContains", () => {
  test("check string includes substring", () => {
    expect(stringContains("some data", /random message/i)).toBe(false);
    expect(stringContains("user data", /another random message/i)).toBe(false);

    expect(stringContains("some data", /some data/i)).toBe(true);
    expect(stringContains("user data", /user data/i)).toBe(true);
  });
});
