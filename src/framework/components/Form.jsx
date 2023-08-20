import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";

const getInitialFormState = (fields) =>
  fields.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.name]: curr.default || curr.default === 0 ? curr.default : null
    }),
    {}
  );

export default ({ fields, label, onSubmit, render }) => {
  const [formState, setFormState] = useState(getInitialFormState(fields));

  const handleClearClick = () => setFormState(getInitialFormState(fields));

  const handleFieldChange = (e, field) =>
    setFormState((currentState) => ({
      ...currentState,
      [e.target.name]:
        field.type === "number" ? parseInt(e.target.value || 0) : e.target.value
    }));

  const handleSubmit = () => {
    onSubmit(formState);
    handleClearClick();
  };

  return (
    <>
      {render(
        <StyledForm>
          {fields.map((field) => {
            const fieldProps = {
              name: field.name,
              onChange: (e) => handleFieldChange(e, field)
            };
            return (
              <span className="field-set" key={field.name}>
                {label && <span className="field-label">{label(field)}</span>}
                {field.type === "select" ? (
                  <select {...fieldProps} value={formState[field.name] ?? ""}>
                    {field.options?.map?.((option) => (
                      <option value={option || ''} key={option || ''}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type || "text"}
                    value={formState[field.name] ?? ""}
                    placeholder={field.name}
                    {...fieldProps}
                  />
                )}
              </span>
            );
          })}
          <div className="row end p1">
            <Button onClick={handleClearClick} label="Clear" />
            <Button onClick={handleSubmit} label="Submit" />
          </div>
        </StyledForm>,
        formState
      )}
    </>
  );
};

const StyledForm = styled.div`
  .field-set {
    width: 100%;
    display: flex;
    margin-top: 10px;
    align-items: center;
    background-color: #fff;
    border-radius: 3px;
    .field-label {
      padding: 12px 6px 12px 12px;
    }
    input,
    select {
      border: none;
      padding: 10px 10px;
      height: 100%;
      margin-left: 10px;
    }
  }
`;
