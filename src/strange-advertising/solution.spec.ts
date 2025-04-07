import { StrangeAdvertising } from "./solution";

describe("Strange Advertising", () => {
  it.each([
    [5, 24],
    [3, 9],
  ])("for %d days, we expect %d likes", (n, expected) => {
    expect(StrangeAdvertising(n)).toBe(expected);
  });
});
