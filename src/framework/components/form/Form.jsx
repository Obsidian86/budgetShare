import { useEffect, useState } from "react";
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
            <Button onClick={handleClearClick} label="Clear" type="danger" />
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
    width: 86%;
    display: flex;
    margin: 1.65rem auto;
    align-items: center;
    background-color: #D8E4E4;
    border-radius: 6px;
    .field-label {
      padding: 0 6px 0 12px;
      color: #A3B7B6;
      font-size: .8rem;
    }
    input,
    select {
      border: none;
      padding: 16px 10px;
      height: 100%;
      margin-left: 10px;
      background: transparent;
      width: calc(100% - 20px);
    }
    select {
      width: calc(96% - 75px);
    }
  }
`;
