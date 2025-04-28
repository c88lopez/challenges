import { FirstUniqueNumber } from "./solution";

describe("First Unique Number", () => {
  it.each([
    ["abcde", 1],
    ["hackerrank", 1],
    ["holamundoh", 3],
    ["loveleetcode", 3],
    ["xxyyz", 5],
    ["abcabcde", 7],
    ["falafal", -1],
    ["aabbcc", -1],
    ["aabbccddeeff", -1],
  ])("should return expected value", (s, expected) => {
    expect(FirstUniqueNumber(s)).toBe(expected);
  });
});
