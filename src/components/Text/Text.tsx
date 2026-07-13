import styled from "styled-components";
import type { TextProps } from "./Text.types";

const StyledLabel = styled.p<{
  $color?: string;
  $size?: "small" | "medium" | "large";
  $crossedOut?: boolean;
}>`
  color: ${(props) => props.$color || "#000"};

  font-size: ${(props) => {
    switch (props.$size) {
      case "small":
        return "0.875rem";
      case "large":
        return "1.25rem";
      default:
        return "1rem";
    }
  }};

  text-decoration: ${(props) => (props.$crossedOut ? "line-through" : "none")};

  opacity: ${(props) => (props.$crossedOut ? "0.6" : "1")};

  display: block;
`;

export const Text = ({
  text = "Label",
  color,
  size = "medium",
  crossedOut = false,
  ...props
}: TextProps) => {
  return (
    <StyledLabel
      $color={color}
      $size={size}
      $crossedOut={crossedOut}
      {...props}
    >
      {text}
    </StyledLabel>
  );
};
