import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";

import { Pagination } from "../../components";
import { theme } from "../../theme/theme";

describe("<Pagination />", () => {
  test("renders pagination items", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Pagination activePage={1} amount={10} />
      </ThemeProvider>,
    );

    expect(getByText(/^1$/i)).toBeTruthy();
    expect(getByText(/2/i)).toBeTruthy();
    expect(getByText(/3/i)).toBeTruthy();
    expect(getByText(/4/i)).toBeTruthy();
    expect(getByText(/5/i)).toBeTruthy();
    expect(getByText(/6/i)).toBeTruthy();
    expect(getByText(/7/i)).toBeTruthy();
    expect(getByText(/8/i)).toBeTruthy();
    expect(getByText(/9/i)).toBeTruthy();
    expect(getByText(/^10$/i)).toBeTruthy();
  });

  test("calls setActivePage handler on pagin item click", () => {
    const setActivePage = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Pagination activePage={1} amount={10} setActivePage={setActivePage} />
      </ThemeProvider>,
    );

    expect(setActivePage).not.toHaveBeenCalled();

    userEvent.click(getByText(/^2$/i));

    expect(setActivePage).toHaveBeenCalled();
    expect(setActivePage).toHaveBeenCalledTimes(1);
    expect(setActivePage).toHaveBeenCalledWith(2);
  });
});
