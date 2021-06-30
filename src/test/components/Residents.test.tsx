import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Residents } from "../../components";
import { theme } from "../../theme/theme";

describe("<Residents />", () => {
  test("correcrly renders list of residents", () => {
    const dummyData = [
      { name: "dummy name 1", id: "1", image: "https://www.dummycdn.com/1" },
      { name: "dummy name 2", id: "2", image: "https://www.dummycdn.com/2" },
      { name: "dummy name 3", id: "3", image: "https://www.dummycdn.com/3" },
    ];

    const { getByText, getAllByRole } = render(
      <ThemeProvider theme={theme}>
        <Residents residents={dummyData} />
      </ThemeProvider>,
    );

    expect(getByText(/list of residents:/i)).toBeTruthy();
    expect(getByText(/dummy name 1/i)).toBeTruthy();
    expect(getByText(/dummy name 2/i)).toBeTruthy();
    expect(getByText(/dummy name 3/i)).toBeTruthy();

    const images = getAllByRole("img");

    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute("src", "https://www.dummycdn.com/1");
    expect(images[1]).toHaveAttribute("src", "https://www.dummycdn.com/2");
    expect(images[2]).toHaveAttribute("src", "https://www.dummycdn.com/3");

    const links = getAllByRole("link");

    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute("href", "/details/character/1");
    expect(links[1]).toHaveAttribute("href", "/details/character/2");
    expect(links[2]).toHaveAttribute("href", "/details/character/3");
  });
});
