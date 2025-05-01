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
  const dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let maxVal = -Infinity;

    for (let j = 0; j < i; j++) {
      maxVal = Math.max(maxVal, prices[j] + dp[i - j - 1]);
    }

    dp[i] = maxVal;
  }

  return dp[n];
};
