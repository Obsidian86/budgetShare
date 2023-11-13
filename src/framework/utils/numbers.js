export const displayPercent = (value) =>
  (Math.round(value * 100) / 100).toFixed(2) + "%";

export const randomInt = (max) => {
  return Math.floor(Math.random() * max);
}
