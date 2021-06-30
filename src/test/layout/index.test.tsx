import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import { theme } from "../../theme/theme";
import AppLayout from "../../layout/index";

jest.mock(
  "./../../components/footer",
  () =>
    function MockedFooter() {
      return <div>mocked footer</div>;
    },
);

jest.mock(
  "./../../components/AppHeader",
  () =>
    function AppHeader() {
      return <div>mocked AppHeader</div>;
    },
);

describe("<AppLayout />", () => {
  test("renders own and childrens contents", () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <AppLayout>
          <div>dummy data</div>
        </AppLayout>
      </ThemeProvider>,
    );

    expect(getByText(/mocked footer/i)).toBeTruthy();
    expect(getByText(/mocked appheader/i)).toBeTruthy();
    expect(getByText(/dummy data/i)).toBeTruthy();
    expect(getByText(/The Rick and Morty APP/i)).toBeTruthy();

    expect(getByTestId(/main-thumbnail/i)).toBeTruthy();
  });
});
