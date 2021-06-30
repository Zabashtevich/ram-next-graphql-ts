import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Episode } from "../../components";
import { theme } from "../../theme/theme";

describe("<Episode />", () => {
  test("correctly render received character item", () => {
    const dummyData = {
      id: "1",
      name: "dummy name",
      air_date: "dummy date",
      episode: "dummy offical episode name",
    };

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Episode episode={dummyData} />
      </ThemeProvider>,
    );

    expect(getByText(/dummy name/i)).toBeTruthy();
    expect(getByText(/dummy date/i)).toBeTruthy();
    expect(getByText(/dummy offical episode name/i)).toBeTruthy();
  });
});
