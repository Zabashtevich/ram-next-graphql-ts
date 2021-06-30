import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Modal } from "../../components";
import { theme } from "../../theme/theme";
import { useModalContext } from "../../context";

jest.mock("./../../context", () => ({ useModalContext: jest.fn() }));

describe("<Modal />", () => {
  const setVisible = jest.fn();

  test("not mounting when visible mark is not true", () => {
    (useModalContext as jest.Mock).mockReturnValue({
      visible: false,
      setVisible,
    });

    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <Modal />
      </ThemeProvider>,
    );

    expect(queryByTestId(/modal-container/i)).not.toBeTruthy();
  });

  test("mounting when visible mark is true", () => {
    (useModalContext as jest.Mock).mockReturnValue({
      visible: true,
      setVisible,
    });

    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <Modal />
      </ThemeProvider>,
    );

    expect(getByTestId(/modal-container/i)).toBeTruthy();
    expect(getByTestId(/modal-overlay/i)).toBeTruthy();
    expect(getByTestId(/modal-close-icon/i)).toBeTruthy();
    expect(getByTestId(/modal-close-button/i)).toBeTruthy();

    expect(getByText(/error!/i)).toBeTruthy();
    expect(getByText(/something gone wrong.../i)).toBeTruthy();
    expect(getByText(/close/i)).toBeTruthy();
  });
});
