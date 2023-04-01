export default (num) => {
  let length = 0;
  num = parseInt(num);
  if (typeof num === "number" && num >= 0) length = num;
  return Array.from(Array(length).keys());
};
