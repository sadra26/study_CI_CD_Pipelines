const sum = require("./math");

test("Testing sum(10, 10) equals 20", () => {
  const result = sum(10, 10);
  expect(result).toBe(20);
});