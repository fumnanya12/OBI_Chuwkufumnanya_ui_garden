import type { ComponentProps } from "react";

export type RadioProps = ComponentProps<"input"> & {
  labels?: string[];
  selected?: string;
};
