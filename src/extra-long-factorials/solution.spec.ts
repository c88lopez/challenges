import { ExtraLongFactorials } from "./solution";

describe("ExtraLongFactorials", () => {
  it.each([
    { n: 5, expected: 120 },
    { n: 10, expected: 3628800 },
    { n: 20, expected: 2432902008176640000 },
    { n: 25, expected: 15511210043330985984000000 },
  ])("should return the correct factorial", ({ n, expected }) => {
    expect(ExtraLongFactorials(n)).toEqual(expected);
  });
});
