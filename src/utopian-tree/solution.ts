function UtopianTree(n: number): number {
  let height = 1;

  for (let i = 1; i <= n; i++) {
    height = i % 2 === 0 ? height + 1 : height * 2;
  }

  return height;
}
