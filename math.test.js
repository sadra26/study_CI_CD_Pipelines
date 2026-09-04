const sum = require("./math");

test("The result must be 20 when calling sum(10, 10)", () => {
  const result = sum(10, 10);
  expect(result).toBe(20);
});