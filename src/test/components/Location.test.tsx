import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Location } from "../../components";
import { theme } from "../../theme/theme";

describe("<Location />", () => {
  test("correctly render received location item", () => {
    const dummyData = {
      id: "1",
      name: "dummy name",
      type: "dummy type",
      dimension: "dummy dimension",
    };

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Location item={dummyData} />
      </ThemeProvider>,
    );

    expect(getByText(/dummy name/i)).toBeTruthy();
    expect(getByText(/type:/i)).toBeTruthy();
    expect(getByText(/dummy type/i)).toBeTruthy();
    expect(getByText(/dimension:/i)).toBeTruthy();
    expect(getByText(/dummy dimension/i)).toBeTruthy();
  });
});
