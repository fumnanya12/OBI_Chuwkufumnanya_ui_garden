import styled from "styled-components";
import type { HeroImageProps } from "./HeroImage.types";

const HeroSection = styled.section<{
  $imageUrl?: string;
  $disabled?: boolean;
}>`
  width: 100%;
  min-height: 350px;
  padding: 4rem 2rem;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
`;

export const HeroImage = ({
  title = "Hero Title",
  subtitle = "Hero subtitle text",
  imageUrl = "/images/car.jpg",
  disabled = false,
  ...props
}: HeroImageProps) => {
  return (
    <HeroSection $imageUrl={imageUrl} $disabled={disabled} {...props}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeroSection>
  );
};
