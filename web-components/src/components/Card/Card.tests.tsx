import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  test("component is visible", () => {
    const { getByText } = render(
      <Card
        title="Assignment Card"
        description="A card component."
        imageUrl="/images/car.jpg"
      />
    );

    expect(
      getByText("Assignment Card")
    ).toBeVisible();
  });

   test("card appears disabled", () => {
    render(
      <Card
        title="Disabled Card"
        description="This card is visually disabled."
        disabled
      />
    );

    const card = document.getElementById("card");

    expect(card).toHaveStyle({
      opacity: "0.5",
    });

    expect(card).toHaveStyle({
      cursor: "not-allowed",
    });
  });
});