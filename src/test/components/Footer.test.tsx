import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Footer } from "../../components";
import { theme } from "../../theme/theme";

describe("<Footer />", () => {
  test("renders content with auxillary navigations link", () => {
    const { getAllByRole, getByText } = render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>,
    );

    expect(getAllByRole("link")).toHaveLength(4);

    expect(getByText(/characters:/i)).toBeTruthy;
    expect(getByText(/671/i)).toBeTruthy;
    expect(getByText(/locations:/i)).toBeTruthy;
    expect(getByText(/108/i)).toBeTruthy;
    expect(getByText(/episodes:/i)).toBeTruthy;
    expect(getByText(/41/i)).toBeTruthy;
    expect(getByText(/by zabashtevich 2021/i)).toBeTruthy;
  });
});
