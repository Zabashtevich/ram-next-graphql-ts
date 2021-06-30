import { getPagesAmount } from "../../utils";
import { SearchPageResponse } from "../../interfaces/pages/SearchPage";

describe("getPagesAmount", () => {
  test("return pages amount from multiply server response", () => {
    const mockedResponseWithCharacters = {
      characters: {
        info: {
          pages: "2",
        },
      },
    };

    expect(
      getPagesAmount(mockedResponseWithCharacters as SearchPageResponse),
    ).toBe("2");

    const mockedResponseWithLocations = {
      locations: {
        info: { pages: "3" },
      },
    };

    expect(
      getPagesAmount(mockedResponseWithLocations as SearchPageResponse),
    ).toBe("3");

    const mockedResponseWithEpisodes = {
      episodes: {
        info: {
          pages: "4",
        },
      },
    };

    expect(
      getPagesAmount(mockedResponseWithEpisodes as SearchPageResponse),
    ).toBe("4");
  });
});
