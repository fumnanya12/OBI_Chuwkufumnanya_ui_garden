import { render } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

describe("HeroImage", () => {
  test("component is visible", () => {
    const { getByText } = render(
      <HeroImage
        title="Welcome"
        subtitle="Hero subtitle"
      />
    );

    expect(
      getByText("Welcome")
    ).toBeVisible();
  });

  test("hero image appears disabled", () => {
    const { getByText } = render(
      <HeroImage
        title="Disabled Hero"
        subtitle="Hero subtitle"
        disabled
      />
    );

    const title = getByText("Disabled Hero");

    const heroSection = title.parentElement;

    expect(heroSection).toHaveStyle({
      opacity: "0.5",
    });

    expect(heroSection).toHaveStyle({
      cursor: "not-allowed",
    });
  });
});