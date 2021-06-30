import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Character } from "./../../src/components";
import { theme } from "../../src/theme/theme";

describe("<Character />", () => {
  test("correctly render received character item", () => {
    const dummyData = {
      status: "dummy status",
      species: "dummy species",
      image: "https://www.dummycdn.com/",
      name: "dummy name",
      id: "1",
      origin: {
        id: "1",
        name: "dummy origin name",
      },
      location: {
        id: "1",
        name: "dummy location name",
      },
    };

    const { getByText, getByRole, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Character item={dummyData} />
      </ThemeProvider>,
    );

    expect(getByText(/dummy name/i)).toBeTruthy();
    expect(getByText(/last known location:/i)).toBeTruthy();
    expect(getByText(/dummy location name/i)).toBeTruthy();
    expect(getByText(/dummy status - dummy species/i)).toBeTruthy();
    expect(getByText(/first seen in:/i)).toBeTruthy();
    expect(getByText(/dummy origin name/i)).toBeTruthy();

    expect(getByRole("img")).toHaveAttribute(
      "src",
      "https://www.dummycdn.com/",
    );

    expect(getByTestId(/character-link/i)).toBeTruthy();
    expect(getByTestId(/location-link/i)).toBeTruthy();
    expect(getByTestId(/episode-link/i)).toBeTruthy();
  });
});
