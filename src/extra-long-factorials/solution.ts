function ExtraLongFactorials(n: number): number {
  let currentNumber = BigInt(n);
  let total: bigint = 1n;

  while (currentNumber > 0) {
    total = currentNumber * total;

    currentNumber--;
  }

  return Number(total);
}

export { ExtraLongFactorials };
