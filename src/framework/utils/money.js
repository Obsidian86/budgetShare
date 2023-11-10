export const display = (value) => {
  const parsedValue = parseFloat(value?.replace?.(/,/g, '') ?? value)
  return `${parsedValue.toLocaleString("en-US", {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
