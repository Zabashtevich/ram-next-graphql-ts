import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import { AppHeader } from "../../src/components";
import { mockUseRouter } from "../auxillary/useRouter";
import { theme } from "../../src/theme/theme";

describe("AppHeader", () => {
  it("correctly renders navigation with links", () => {
    mockUseRouter({
      asPath: "/characters/1",
      route: "/characters/1",
      query: "1",
      pathname: "/characters/1",
    });

    const { getByText, getByTestId, getAllByRole } = render(
      <ThemeProvider theme={theme}>
        <AppHeader />
      </ThemeProvider>,
    );

    expect(getByText(/characters/i)).toBeTruthy();
    expect(getByText(/locations/i)).toBeTruthy();
    expect(getByText(/episodes/i)).toBeTruthy();

    expect(getByTestId(/app-logo/i)).toBeTruthy();
    expect(getAllByRole("link")).toHaveLength(4);
  });

  it("change active characters link color styles on /characters/[slug]", () => {
    mockUseRouter({
      asPath: "/characters/1",
      route: "/characters/1",
      query: "1",
      pathname: "/characters/1",
    });

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AppHeader />
      </ThemeProvider>,
    );

    expect(getByText(/characters/i)).toHaveStyle("color: rgb(255, 152, 0)");
  });

  it("change active locations link color styles on /locations/[slug]", () => {
    mockUseRouter({
      asPath: "/locations/1",
      route: "/locations/1",
      query: "1",
      pathname: "/locations/1",
    });

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AppHeader />
      </ThemeProvider>,
    );

    expect(getByText(/locations/i)).toHaveStyle("color: rgb(255, 152, 0)");
  });

  it("change active episodes link color styles on /episodes/[slug]", () => {
    mockUseRouter({
      asPath: "/episodes/1",
      route: "/episodes/1",
      query: "1",
      pathname: "/episodes/1",
    });

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AppHeader />
      </ThemeProvider>,
    );

    expect(getByText(/episodes/i)).toHaveStyle("color: rgb(255, 152, 0)");
  });
});
