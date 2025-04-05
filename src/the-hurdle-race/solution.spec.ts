import { theHurdleRace } from "./solution";

describe("The Hurdle Race", () => {
  it.each([
    {
      k: 4,
      height: [1, 6, 3, 5, 2],
      expected: 2,
    },
  ])("should return correct amount of doses", ({ k, height, expected }) => {
    const result = theHurdleRace(k, height);

    expect(result).toEqual(expected);
  });
});
