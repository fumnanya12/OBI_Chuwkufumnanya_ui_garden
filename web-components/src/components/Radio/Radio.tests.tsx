import { render } from "@testing-library/react";
import { Radio } from "./Radio";

describe("Radio", () => {
  test("component is visible", () => {
    const { getByLabelText } = render(
      <Radio
        labels={["Student", "Developer", "Designer"]}
        selected="Developer"
      />
    );

    const radio = getByLabelText("Developer");

    expect(radio).toBeVisible();
  });

  test("selected radio is checked", () => {
    const { getByLabelText } = render(
      <Radio
        labels={["Student", "Developer", "Designer"]}
        selected="Developer"
      />
    );

    const radio = getByLabelText("Developer");

    expect(radio).toBeChecked();
  });

  test("radio is disabled", () => {
    const { getByLabelText } = render(
      <Radio
        labels={["Student", "Developer", "Designer"]}
        selected="Developer"
        disabled
      />
    );

    const radio = getByLabelText("Developer");

    expect(radio).toBeDisabled();

    expect(radio).toHaveStyle({
      opacity: "0.5",
    });
  });
});