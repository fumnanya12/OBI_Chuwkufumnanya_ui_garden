import styled from "styled-components";
import type { CardProps } from "./Card.types";

const StyledCard = styled.div<{
  $backgroundColor?: string;
  $disabled?: boolean;
}>`
  width: 100%;
  max-width: 350px;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${(props) => props.$backgroundColor || "#ffffff"};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.5rem;
`;

const CardDescription = styled.p`
  margin: 0;
`;

export const Card = ({
  title = "Card Title",
  description = "Card description text.",
  imageUrl = "/images/car.jpg",
  backgroundColor,
  disabled = false,
  ...props
}: CardProps) => {
  return (
    <StyledCard
      id="card"
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      {...props}
    >
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </StyledCard>
  );
};
