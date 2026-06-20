import styled from "styled-components";
import type {
  TableProps,
  TableHeaderProps,
  TableRowProps,
  TableCellProps,
  TableFooterProps,
} from "./Table.types";

const StyledTable = styled.table<{ $disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};


`;

const StyledHeader = styled.th<{ $disabled?: boolean }>`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  background-color: ${(props) => (props.$disabled ? "#e5e7eb" : "#2563eb")};
  color: ${(props) => (props.$disabled ? "#6b7280" : "white")};
  text-align: left;
`;

const StyledRow = styled.tr<{ $disabled?: boolean }>`
  background-color: ${(props) => (props.$disabled ? "#f3f4f6" : "white")};
`;

const StyledCell = styled.td<{ $disabled?: boolean }>`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  color: ${(props) => (props.$disabled ? "#9ca3af" : "#111827")};
`;

const StyledFooter = styled.tfoot<{ $disabled?: boolean }>`
  background-color: ${(props) => (props.$disabled ? "#e5e7eb" : "#f9fafb")};
  font-weight: bold;
`;

export const Table = ({ disabled = false, children, ...props }: TableProps) => {
  return (
    <StyledTable $disabled={disabled} {...props}>
      {children}
    </StyledTable>
  );
};

export const TableHeader = ({
  disabled = false,
  children,
  ...props
}: TableHeaderProps) => {
  return (
    <StyledHeader $disabled={disabled} {...props}>
      {children}
    </StyledHeader>
  );
};

export const TableRow = ({
  disabled = false,
  children,
  ...props
}: TableRowProps) => {
  return (
    <StyledRow $disabled={disabled} {...props}>
      {children}
    </StyledRow>
  );
};

export const TableCell = ({
  disabled = false,
  children,
  ...props
}: TableCellProps) => {
  return (
    <StyledCell $disabled={disabled} {...props}>
      {children}
    </StyledCell>
  );
};

export const TableFooter = ({
  disabled = false,
  children,
  ...props
}: TableFooterProps) => {
  return (
    <StyledFooter $disabled={disabled} {...props}>
      {children}
    </StyledFooter>
  );
};