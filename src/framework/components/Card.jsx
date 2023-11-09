import { styled } from "styled-components";

const Card = ({
  children,
  className,
  background = "#fff",
  radius = '0px',
  shadow = false
}) => {
  return (
    <StyledCard
      className={className}
      $background={background}
      $radius={radius}
      $shadow={shadow}
    >
      {children}
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  background-color: ${(p) => p.$background};
  border-radius: ${p => p.$radius};
  ${p => p.$shadow ? 'box-shadow: 0 0 4px rgba(0,0,0,.2);' : ''}
`;
