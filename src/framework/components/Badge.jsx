import { styled } from "styled-components";

const Badge = ({
  text,
  background = "#54ACD1",
  color = "#fff",
  borderRadius = "20px",
  padding = ".67rem 1rem",
  className=''
}) => {
  return (
    <StyledBadge
      $bgColor={background}
      $color={color}
      $borderRadius={borderRadius}
      $padding={padding}
      className={className}
    >
      {text}
    </StyledBadge>
  );
};

export default Badge;

const StyledBadge = styled.span`
  color: ${(p) => p.$color};
  background-color: ${(p) => p.$bgColor};
  border-radius: ${(p) => p.$borderRadius};
  padding: ${(p) => p.$padding};
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
