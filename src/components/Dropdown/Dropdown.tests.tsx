import { render } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
  test("component is visible", () => {
    const { getByRole } = render(
      <Dropdown options={["Student", "Developer", "Designer"]} />,
    );

    const dropdown = getByRole("combobox");

    expect(dropdown).toBeVisible();
  });

  test("dropdown is disabled", () => {
    const { getByRole } = render(
      <Dropdown options={["Student", "Developer", "Designer"]} disabled />,
    );

    const dropdown = getByRole("combobox");

    expect(dropdown).toBeDisabled();

    expect(dropdown).toHaveStyle({
      cursor: "not-allowed",
    });
  });
});
