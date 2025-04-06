import { AngryProfessor } from "./solution";

describe("Angry Professor", () => {
  it.each([[3, [-2, -1, 0, 1, 2], "NO"]])(
    "should return expected class cancellation",
    (k, a, expected) => {
      expect(AngryProfessor(k, a)).toBe(expected);
    },
  );
});
