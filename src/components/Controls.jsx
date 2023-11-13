import Button from "../framework/components/Button";

const Controls = ({ controls }) => {
  return (
    <div className="mb2 content">
      {controls.map((control) => (
        <Button
          key={control.label}
          onClick={control.action}
          label={control.label}
          className="mr2"
        />
      ))}
    </div>
  );
};

export default Controls;
