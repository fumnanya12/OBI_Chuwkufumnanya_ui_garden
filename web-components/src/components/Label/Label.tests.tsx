import { render } from "@testing-library/react";
import { Label } from "./Label";

describe("Label", () => {
  test("component is visible", () => {
    const { getByText } = render(
      <Label text="Username" />
    );

    const label = getByText("Username");

    expect(label).toBeVisible();
  });

  test("label appears crossed out", () => {
    const { getByText } = render(
      <Label
        text="Username"
        crossedOut
      />
    );

    const label = getByText("Username");

    expect(label).toHaveStyle({
      textDecoration: "line-through",
    });

    expect(label).toHaveStyle({
      opacity: "0.6",
    });
  });
});