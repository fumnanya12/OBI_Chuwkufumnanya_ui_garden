import styled from "styled-components";
import type { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{ $backgroundColor?: string }>`
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.$backgroundColor || "#2563eb"};
  color: white;
  cursor: pointer;
  text-align: center;
  display: block;

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:focus {
    background-color: ${(props) => props.$backgroundColor || "#2563eb"};
    outline: 2px solid blue;
  }
`;

export const Button = ({
  label = "Button",
  backgroundColor,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <div>
    <StyledButton
      $backgroundColor={backgroundColor}
      disabled={disabled}
      {...props}
    >
      {label}
    </StyledButton>
   
  );
};
