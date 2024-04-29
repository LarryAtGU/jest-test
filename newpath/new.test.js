import { productFib } from "../src/challenge";

const testData = [
  [4895, [55, 89, true]],
  [0, [0, 1, true]],
  [5895, [89, 144, false]],
  [74049690, [6765, 10946, true]],
];

test("pass all product Fib test", () => {
  for (const dt of testData) {
    expect(productFib(dt[0])).toEqual(dt[1]);
  }
});
