import { styled } from "styled-components";

const Field = ({ type = "text", value = "", background = "#fff" }) => {
  return <StyledInput type={type} value={value} $background={background} />;
};

export default Field;

const StyledInput = styled.input`
  border: none;
  background-color: ${(p) => p.$background};
`;
