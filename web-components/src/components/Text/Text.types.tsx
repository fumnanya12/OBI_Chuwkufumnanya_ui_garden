import type { ComponentProps } from "react";

export type TextProps = ComponentProps<"p"> & {
  text?: string;
  color?: string;
  size?: "small" | "medium" | "large";
  crossedOut?: boolean;
};
