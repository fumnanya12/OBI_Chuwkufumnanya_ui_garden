import type { ComponentProps } from "react";

export type HeroImageProps = ComponentProps<"section"> & {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  disabled?: boolean;
};
