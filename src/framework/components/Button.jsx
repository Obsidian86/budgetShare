import { css, styled } from "styled-components";

const Button = ({ label, onClick, type = "success", className = "" }) => {
  return (
    <StyledButton onClick={onClick} $type={type} className={className}>
      {label}
    </StyledButton>
  );
};

export default Button;

const successStyles = css`
  background-color: #179b54;
  color: #ffffff;
  &:hover {
    background-color: #0b320a;
    color: #cee0d6;
  }
`;

const dangerStyles = css`
  background-color: #c14949;
  &:hover {
    background-color: #550000;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  color: #fff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.2s;
  ${(p) => p.$type === "success" && successStyles}
  ${(p) => p.$type === "danger" && dangerStyles}
`;
