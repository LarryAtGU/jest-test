//function.test.js
import { sub, add } from "../src/functions";

test("1 + 2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});
test("10-2=8", () => {
  expect(sub(10, 2)).toBe(8);
});
