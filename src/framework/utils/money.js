export const display = (value) => {
  const v = Math.round(value * 100) / 100;
  return `$${v.toLocaleString("en-US")}`;
};
