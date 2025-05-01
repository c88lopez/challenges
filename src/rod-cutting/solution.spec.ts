import { RodCutting } from "./solution";

describe("Rod Cutting", () => {
  it.each([
    [4, [1, 5, 8, 9], 10],
    [5, [2, 5, 7, 8, 10], 12],
    [8, [1, 5, 8, 9, 10, 17, 17, 20], 22],
    [8, [3, 5, 8, 9, 10, 17, 17, 20], 24],
    [5, [2, 5, 0, 0, 10], 12],
    [5, [0, 0, 0, 0, 0], 0],
    [1, [2], 2],
  ])("should return expected value", (rodLength, prices, expected) => {
    expect(RodCutting(rodLength, prices)).toBe(expected);
  });
});
