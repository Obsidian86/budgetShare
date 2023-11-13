import { styled } from "styled-components";

const Field = ({
  type = "text",
  background = "#e6f2fa",
  name = "",
  label = null,
  margin = '0 0 18px 0',
  formHandler = { formHandler },
}) => {
  const [values, setValues] = formHandler;
  const value = values[name] || "";

  const handleChange = (e) => {
    setValues((currentValues) => ({
      ...currentValues,
      [name]: e.target.value,
    }));
  };

  return (
    <StyledInput $background={background} $radius="8px" $padding="18px" $margin={margin}>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} value={value} name={name} onChange={handleChange} placeholder={label} />
    </StyledInput>
  );
};

export default Field;

const StyledInput = styled.span`
  background-color: ${(p) => p.$background};
  display: flex;
  align-items: center;
  margin: ${p => p.$margin};
  border-radius: ${(p) => p.$radius};
  border: 1px solid #b3c2cc;
  label {
    padding: ${(p) => `${p.$padding} 3px ${p.$padding} ${p.$padding}`};
    font-weight: 600;
  }
  input {
    padding: ${(p) => p.$padding};
    flex: 1;
    border: none;
    border-radius: 0 ${(p) => p.$radius} ${(p) => p.$radius} 0;
    margin-left: 10px;
    background-color: ${(p) => p.$background};
  }
`;
