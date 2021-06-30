import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "styled-components";

import { Search } from "../../components";
import { theme } from "../../theme/theme";

describe("<Search />", () => {
  const mockOnChange = jest.fn();
  const mockActivateSearch = jest.fn();
  const mockDisableSearch = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders inactive input field when searchActive flag is false", () => {
    const dummyState = {
      onChange: mockOnChange,
      activateSearch: mockActivateSearch,
      disableSearch: mockDisableSearch,
      searchActive: false,
      loading: false,
      notFound: false,
      searchValue: "",
    };

    const { getByText, getByTestId, queryByText, queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <Search {...dummyState} />
      </ThemeProvider>,
    );

    expect(getByText(/search character or places:/i)).toBeTruthy();
    expect(queryByText(/not found/i)).not.toBeTruthy();
    expect(queryByTestId(/search-spinner/i)).not.toBeTruthy();

    expect(getByTestId(/search-container/i)).toHaveStyle("width:200px");
    expect(getByTestId(/search-input/i)).toHaveValue("");
    expect(getByTestId(/search-close-icon/i)).toBeTruthy();
  });

  test("renders active input field when searchActive is true", () => {
    const dummyState = {
      onChange: mockOnChange,
      activateSearch: mockActivateSearch,
      disableSearch: mockDisableSearch,
      searchActive: true,
      loading: true,
      notFound: false,
      searchValue: "dummy input value",
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Search {...dummyState} />
      </ThemeProvider>,
    );

    expect(getByTestId(/search-container/i)).toHaveStyle("width:500px");
  });

  test("renders loading spinner when loading is true", () => {
    const dummyState = {
      onChange: mockOnChange,
      activateSearch: mockActivateSearch,
      disableSearch: mockDisableSearch,
      searchActive: true,
      loading: true,
      notFound: false,
      searchValue: "",
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Search {...dummyState} />
      </ThemeProvider>,
    );

    expect(getByTestId(/search-spinner/i)).toBeTruthy();
  });

  test("renders not found message when notFound flag is true", () => {
    const dummyState = {
      onChange: mockOnChange,
      activateSearch: mockActivateSearch,
      disableSearch: mockDisableSearch,
      searchActive: true,
      loading: false,
      notFound: true,
      searchValue: "",
    };

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Search {...dummyState} />
      </ThemeProvider>,
    );

    expect(getByText(/not found/i)).toBeTruthy();
  });

  test("calls received from props onChange handler", async () => {
    const dummyState = {
      onChange: mockOnChange,
      activateSearch: mockActivateSearch,
      disableSearch: mockDisableSearch,
      searchActive: true,
      loading: false,
      notFound: true,
      searchValue: "dummy user data",
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Search {...dummyState} />
      </ThemeProvider>,
    );

    expect(mockOnChange).not.toHaveBeenCalled();
    expect(getByTestId(/search-input/i)).toHaveValue("dummy user data");

    await act(async () => {
      fireEvent.change(getByTestId(/search-input/i), {
        target: { value: "another user data" },
      });
    });

    expect(mockOnChange).toHaveBeenCalled();
  });

  test("activate input on click when field is disabled", async () => {
    const dummyState = {
      onChange: mockOnChange,
      activateSearch: mockActivateSearch,
      disableSearch: mockDisableSearch,
      searchActive: false,
      loading: false,
      notFound: false,
      searchValue: "dummy user data",
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Search {...dummyState} />
      </ThemeProvider>,
    );

    expect(getByTestId(/search-container/i)).toHaveStyle("width:200px");
    expect(mockActivateSearch).not.toHaveBeenCalled();

    await act(async () => {
      fireEvent.click(getByTestId(/search-container/i));
    });

    expect(mockActivateSearch).toHaveBeenCalled();
  });

  test("disable input on click when field is active", async () => {
    const dummyState = {
      onChange: mockOnChange,
      activateSearch: mockActivateSearch,
      disableSearch: mockDisableSearch,
      searchActive: true,
      loading: false,
      notFound: false,
      searchValue: "dummy user data",
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Search {...dummyState} />
      </ThemeProvider>,
    );

    expect(getByTestId(/search-container/i)).toHaveStyle("width:500px");
    expect(mockDisableSearch).not.toHaveBeenCalled();

    await act(async () => {
      fireEvent.click(getByTestId(/search-close-icon/i));
    });

    expect(mockDisableSearch).toHaveBeenCalled();
  });
});
