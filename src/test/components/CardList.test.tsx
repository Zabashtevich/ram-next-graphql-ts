import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CardsList } from "../../components";

describe("<Cardlist/>", () => {
  test("getting and mapping array of items from props", () => {
    const dummyData = [
      { id: 1, name: "dummy name 1" },
      { id: 2, name: "dummy name 2" },
      { id: 3, name: "dummy name 3" },
    ];

    const { getByText } = render(
      <CardsList
        items={dummyData}
        renderItem={(item) => <div key={item.id}>{item.name}</div>}
      />,
    );

    expect(getByText(/dummy name 1/i)).toBeTruthy();
    expect(getByText(/dummy name 2/i)).toBeTruthy();
    expect(getByText(/dummy name 3/i)).toBeTruthy();
  });
});
