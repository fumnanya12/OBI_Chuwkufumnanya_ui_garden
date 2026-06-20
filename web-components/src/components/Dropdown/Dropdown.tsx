import styled from "styled-components";
import type { DropdownProps } from "./Dropdown.types";

const StyledDropdown = styled.select`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  width: 100%;

  &:disabled {
    background-color: #e5e7eb;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const Dropdown = ({
  options,
  disabled = false,
  ...props
}: DropdownProps) => {
  return (
    <StyledDropdown disabled={disabled} {...props}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  );
};