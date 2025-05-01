/**
 * Given a rod of length n inches and an array price[]. price[i] denotes the
 * value of a piece of length i. The task is to determine the maximum value
 * obtainable by cutting up the rod and selling the pieces.
 */
export const RodCutting = (n: number, prices: number[]): number => {
  /**
   * Base case, we fill all max possible revenue per length to 0.
   * This is something we will be updating for each length.
   */
  const dp = Array<number>(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let maxVal = -Infinity;

    for (let j = 0; j < i; j++) {
      /**
       * The price to cut a rod by it length is price[n-1]
       * prices[j] Represents the price of a cut of length j+1
       * dp[i] Represents the max revenue possible for length i
       * dp[i - j - 1] Represents the max revenue possible for each cut length
       */
      maxVal = Math.max(maxVal, prices[j] + dp[i - j - 1]);

      console.log({
        i,
        j,
        "prices[j]": prices[j],
        "dp[i - j - 1]": dp[i - j - 1],
        maxVal,
      });
    }

    dp[i] = maxVal;
  }

  return dp[n];
};
