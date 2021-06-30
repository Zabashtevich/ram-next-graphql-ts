import { getPagesAmount } from "../../utils";

describe("getPagesAmount", () => {
  test("return pages amount from multiply server response", () => {
    const mockedResponseWithCharacters = {
      characters: {
        info: {
          pages: "2",
        },
      },
    };

    expect(getPagesAmount(mockedResponseWithCharacters)).toBe("2");

    const mockedResponseWithLocations = {
      locations: {
        info: { pages: "3" },
      },
    };

    expect(getPagesAmount(mockedResponseWithLocations)).toBe("3");

    const mockedResponseWithEpisodes = {
      episodes: {
        info: {
          pages: "4",
        },
      },
    };

    expect(getPagesAmount(mockedResponseWithEpisodes)).toBe("4");
  });
});
