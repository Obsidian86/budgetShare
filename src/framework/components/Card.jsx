import { styled } from "styled-components";

const Card = ({
  children,
  className,
  background = "#fff",
  borderRadius = "4px",
}) => {
  return (
    <StyledCard
      className={className}
      $borderRadius={borderRadius}
      $background={background}
    >
      {children}
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  border-radius: ${(p) => p.$borderRadius};
  background-color: ${(p) => p.$background};
`;
