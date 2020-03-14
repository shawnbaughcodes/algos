import { fibonacci } from "./";

describe("Fibonacci", () => {
  it("should return that it is a fibonacci 1", () => {
    // [0, 1, 1, 2, 3, 5, 8, 13]
    const assertion = fibonacci(3);
    const expected = 2;
    expect(assertion).toEqual(expected);
  });

  it("should return that it is a fibonacci 2", () => {
    // [0, 1, 1, 2, 3, 5, 8, 13]
    const assertion = fibonacci(5);
    const expected = 5;
    expect(assertion).toEqual(expected);
  });

  it("should return that it is a fibonacci 3", () => {
    // [0, 1, 1, 2, 3, 5, 8, 13]
    const assertion = fibonacci(7);
    const expected = 13;
    expect(assertion).toEqual(expected);
  });
});
