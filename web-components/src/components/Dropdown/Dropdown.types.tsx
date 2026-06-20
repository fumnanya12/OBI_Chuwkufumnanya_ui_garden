import type { ComponentProps } from "react";

export type DropdownProps = ComponentProps<"select"> & {
  options: string[];
  disabled?: boolean;
};