import type { ComponentProps } from "react";

export type ImgProps = ComponentProps<"img"> & {
  rounded?: boolean;
  disabled?: boolean;
};