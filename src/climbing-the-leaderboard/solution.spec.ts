import { climbingTheLeaderboard, climbingTheLeaderboardV2 } from "./solution";

describe("Climbing the leaderboard", () => {
  const eachTable = [
    {
      ranking: [100, 100, 50, 40, 40, 20, 10],
      player: [5, 25, 50, 120],
      expected: [6, 4, 2, 1],
    },
    {
      ranking: [100, 90, 90, 80, 75, 60],
      player: [50, 65, 77, 90, 102],
      expected: [6, 5, 4, 2, 1],
    },
    {
      ranking: [100, 60],
      player: [1, 2],
      expected: [3, 3],
    },
  ];

  it.each(eachTable)(
    "should return the maximum length of a subarray with equal elements",
    ({ ranking, player, expected }) => {
      const result = climbingTheLeaderboard(ranking, player);

      expect(result).toEqual(expected);
    },
  );

  it.each(eachTable)(
    "should return the maximum length of a subarray with equal elements V2",
    ({ ranking, player, expected }) => {
      const result = climbingTheLeaderboardV2(ranking, player);

      expect(result).toEqual(expected);
    },
  );
});
