import type { ComponentProps } from "react";

export type TableProps = ComponentProps<"table"> & {
  disabled?: boolean;
};

export type TableHeaderProps = ComponentProps<"th"> & {
  header1?:string;
  disabled?: boolean;
};

export type TableRowProps = ComponentProps<"tr"> & {
  disabled?: boolean;
};

export type TableCellProps = ComponentProps<"td"> & {
  disabled?: boolean;
};

export type TableFooterProps = ComponentProps<"tfoot"> & {
  disabled?: boolean;
};