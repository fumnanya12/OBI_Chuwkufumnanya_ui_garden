import styled from "styled-components";
import type { RadioProps } from "./Radio.types";

const StyledRadio = styled.input`
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Radio = ({
  labels,
  selected,
  disabled = false,
  ...props
}: RadioProps) => {
  return (
    <>
      {labels?.map((label) => (
        <Label key={label}>
          <StyledRadio
            type="radio"
            disabled={disabled}
            value={label}
            checked={selected === label}
            {...props}
          />

          {label}
        </Label>
      ))}
    </>
  );
};
