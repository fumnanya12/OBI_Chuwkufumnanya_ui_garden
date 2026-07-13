import styled from "styled-components";
import type { ImgProps } from "./Img.types";

const StyledImg = styled.img<{
  $rounded?: boolean;
  $disabled?: boolean;
}>`
  max-width: 200px;
  height: 300px;
  border-radius: ${(props) => (props.$rounded ? "12px" : "0")};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  display: block;
`;

export const Img = ({
  rounded = false,
  disabled = false,
  alt = "Image",
  ...props
}: ImgProps) => {
  return (
    <StyledImg $rounded={rounded} $disabled={disabled} alt={alt} {...props} />
  );
};
