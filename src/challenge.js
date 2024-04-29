export const productFib = (val) => {
  let [a, b] = [0, 1];
  while (a * b < val) [a, b] = [b, a + b];
  return [a, b, a * b === val];
};
