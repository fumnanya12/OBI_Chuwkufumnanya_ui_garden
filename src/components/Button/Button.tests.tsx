import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("component is visible", () => {
    const { getByRole } = render(<Button label="Click Me" />);

    const button = getByRole("button", {
      name: "Click Me",
    });

    expect(button).toBeVisible();
  });

  test("background color changes when disabled", () => {
    const { getByRole } = render(<Button label="Disabled Button" disabled />);

    const button = getByRole("button", {
      name: "Disabled Button",
    });

    expect(button).toBeDisabled();
    expect(button).toHaveStyle({
      backgroundColor: "#9ca3af",
    });
  });
});
