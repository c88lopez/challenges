import { BeautifulDaysAtTheMovies } from "./solution";

describe("Beautiful Days At The Movies", () => {
  it.each([[20, 23, 6, 2]])(
    "Between %d and %d with divisor %s we expect %d beautiful days",
    (i, j, k, expected) => {
      expect(BeautifulDaysAtTheMovies(i, j, k)).toBe(expected);
    },
  );
});
