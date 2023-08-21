export const display = (value) => {
  let baseValue = `${value}`;
  if (baseValue?.includes?.(".")) {
    baseValue = baseValue.split(".")[0];
    let decimal = `${value}`.split(".")[1];
    decimal = Math.round(parseFloat(`.${decimal}`) * 100) / 100;
    baseValue += `.${`${decimal}`.split(".")[1]}`;
  } else baseValue += ".00";
  return `${baseValue}%`;
};
