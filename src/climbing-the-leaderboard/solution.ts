function climbingTheLeaderboard(ranked: number[], player: number[]): number[] {
  const rankingUnique = Array.from(new Set(ranked));

  return player.reduce<number[]>((acc, points) => {
    const index = rankingUnique.findIndex((rank) => {
      return points >= rank;
    });

    if (index === -1) {
      acc.push(rankingUnique.length + 1);
    } else {
      acc.push(index + 1);
    }

    return acc;
  }, []);
}

function climbingTheLeaderboardV2(
  ranked: number[],
  player: number[],
): number[] {
  const ranks: number[] = [];
  let rank = 0;

  let playerIndex = player.length - 1;

  for (let rankingIndex = 0; rankingIndex < ranked.length; rankingIndex++) {
    // If not the first, avoid subsequent equal ranking.
    if (
      rankingIndex !== 0 &&
      ranked[rankingIndex] === ranked[rankingIndex - 1]
    ) {
      continue;
    }

    rank++;

    for (; playerIndex > -1; ) {
      if (player[playerIndex] >= ranked[rankingIndex]) {
        ranks[playerIndex] = rank;
        playerIndex--;
      } else {
        // This is the last ranking point
        if (rankingIndex === ranked.length - 1) {
          for (; playerIndex > -1; playerIndex--) {
            ranks[playerIndex] = rank + 1;
          }
        }

        break;
      }
    }
  }

  return ranks;
}

export { climbingTheLeaderboard, climbingTheLeaderboardV2 };
