import type { ComponentProps } from "react";

export type CardProps = ComponentProps<"div"> & {
  title?: string;
  description?: string;
  imageUrl?: string;
  backgroundColor?: string;
  disabled?: boolean;
};