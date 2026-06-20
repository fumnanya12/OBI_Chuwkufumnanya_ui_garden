import { render } from "@testing-library/react";
import { Img } from "./Img";

describe("Img", () => {
  test("component is visible", () => {
    const { getByAltText } = render(
      <Img
        src="/images/car.jpg"
        alt="Car Image"
      />
    );

    const image = getByAltText("Car Image");

    expect(image).toBeVisible();
  });

  test("image appears disabled", () => {
    const { getByAltText } = render(
      <Img
        src="/images/car.jpg"
        alt="Disabled Image"
        disabled
      />
    );

    const image = getByAltText("Disabled Image");

    expect(image).toHaveStyle({
      opacity: "0.5",
    });

    expect(image).toHaveStyle({
      cursor: "not-allowed",
    });
  });
});