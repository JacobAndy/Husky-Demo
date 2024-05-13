const { addNumbers } = require("./index");

const testAddNumbers = (num1, num2, expecteOutput) => () => {
  expect(addNumbers(num1, num2)).toBe(expecteOutput);
};
describe("addNumbers()", () => {
  test("adds two positive numbers", testAddNumbers(3, 5, 8));
  test("adds two negative numbers", testAddNumbers(-3, -5, -8));
  test("adds a positive and a negative number", testAddNumbers(3, -5, -2));
  test("adds two floating-point numbers", testAddNumbers(3.5, 2.5, 6));
});
