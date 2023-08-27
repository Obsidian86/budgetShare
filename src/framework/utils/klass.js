export default (classObj = {}, str = "") =>
  Object.keys(classObj).reduce((prev, curr) => {
    if (classObj[curr]) prev += ` ${curr}`;
    return prev;
  }, str);
