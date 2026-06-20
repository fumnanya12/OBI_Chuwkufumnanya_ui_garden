import { render } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  test("component is visible", () => {
    const { getByText } = render(
      <Text text="Hello World" />
    );

    const text = getByText("Hello World");

    expect(text).toBeVisible();
  });

  test("text appears crossed out", () => {
    const { getByText } = render(
      <Text
        text="Hello World"
        crossedOut
      />
    );

    const text = getByText("Hello World");

    expect(text).toHaveStyle({
      textDecoration: "line-through",
    });

    expect(text).toHaveStyle({
      opacity: "0.6",
    });
  });
});