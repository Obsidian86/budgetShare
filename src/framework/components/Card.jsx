import { styled } from "styled-components";

const Card = ({
  children,
  className,
  background = "#fff",
}) => {
  return (
    <StyledCard
      className={className}
      $background={background}
    >
      {children}
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  background-color: ${(p) => p.$background};
`;
