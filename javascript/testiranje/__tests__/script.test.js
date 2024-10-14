const findMax = require("../script");

test("find the biggest number", () => {
  expect(findMax([-1000, -500, -10, -2, 5, 10, 50, 100, 1000])).not.toBeNull();

  expect(findMax([-1000, -500, -10, -2, 5, 10, 50, 100, 1000])).toBeTruthy();

  expect(findMax([-1000, -500, -10, -2, 5, 10, 50, 100, 1000])).toBe(1000);
});
