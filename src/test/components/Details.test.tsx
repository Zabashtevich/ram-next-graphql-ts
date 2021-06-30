import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Details } from "../../components";

describe("<Details />", () => {
  test("passing throws inside yourself childrens", () => {
    const DummyData = () => <div>dummy children</div>;

    const { getByText } = render(
      <Details>
        <DummyData />
      </Details>,
    );

    expect(getByText(/dummy children/i)).toBeTruthy();
  });
});
