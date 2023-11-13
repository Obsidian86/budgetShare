import Button from "../framework/components/form/Button";
import Icon from "../framework/components/ui/Icon";

const Controls = ({ controls }) => {
  return (
    <div className="mb2 content">
      {controls.map((control) => (
        <Button
          key={control.label}
          onClick={control.action}
          icon={control.icon && <Icon icon={control.icon} />}
          label={control.label}
          className="mr2"
        />
      ))}
    </div>
  );
};

export default Controls;
