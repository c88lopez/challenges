import { AppendAndDelete } from "./solution";

describe("AppendAndDelete", () => {
  it.each([
    ["abc", "xyz", 6, "Yes"],
    ["abc", "abc", 0, "Yes"],
    ["abc", "abcd", 1, "Yes"],
    ["abc", "ab", 1, "Yes"],

    ["abc", "abd", 1, "No"],
    ["abc", "abd", 2, "Yes"],
    ["abc", "abd", 3, "No"],
    ["abc", "abd", 4, "Yes"],
    ["abc", "abd", 5, "No"],
    ["abc", "abd", 6, "Yes"],
    ["abc", "abd", 7, "Yes"],

    ["abcd", "abcef", 3, "Yes"],
    ["abcd", "abcef", 4, "No"],
    ["abcd", "abcef", 5, "Yes"],
    ["abcd", "abcef", 6, "No"],
    ["abcd", "abcef", 7, "Yes"],
    ["abcd", "abcef", 8, "No"],
    ["abcd", "abcef", 9, "Yes"],
    ["abcd", "abcef", 10, "Yes"],
    ["abcd", "abcef", 11, "Yes"],
  ])("%s to %s could use %d operations? %s", (s, t, k, expected) => {
    expect(AppendAndDelete(s, t, k)).toEqual(expected);
  });
});
