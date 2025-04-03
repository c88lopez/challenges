import { pickingNumbers } from "./solution";

describe("Picking Numbers", () => {
  it.each([
    { arr: [4, 6, 5, 3, 3, 1], expected: 3 },
    { arr: [4, 1, 1, 1, 1, 1], expected: 5 },
    { arr: [1, 4, 4, 4, 4], expected: 4 },
    { arr: [1, 1, 2, 2, 4, 4, 5, 5, 5, 6], expected: 5 },
    { arr: [1, 1, 1, 1, 2, 2, 2, 4, 4, 5, 5, 5, 6], expected: 7 },
    { arr: [1, 1], expected: 2 },
    { arr: [1, 2, 2], expected: 3 },
    { arr: [1, 2, 3], expected: 2 },
  ])(
    "should return the maximum length of a subarray with equal elements",
    ({ arr, expected }) => {
      const result = pickingNumbers(arr);

      expect(result).toEqual(expected);
    },
  );
});
