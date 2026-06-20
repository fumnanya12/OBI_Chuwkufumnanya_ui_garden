import type { ComponentProps } from "react";

export type LabelProps = ComponentProps<"label"> & {
  text: string;
  color?: string;
  size?: "small" | "medium" | "large";
   crossedOut?: boolean;
};