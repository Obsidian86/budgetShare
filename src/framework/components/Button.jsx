import { styled } from "styled-components";

const Button = ({ label, onClick, type='success' }) => {
  return <StyledButton onClick={onClick} $type={type}>{label}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  cursor: pointer;
  color: #fff;
  padding: .5rem;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all .2s;
  ${p => p.$type === 'success' && `
      background-color: #179B54;
      color: #0B320A;
      &:hover {
        background-color: #0B320A;
        color: #aae2c4;
      }
  `}
  ${p => p.$type === 'danger' && `
      background-color: #C14949;
      &:hover {
        background-color: #550000;
      }
  `}
`