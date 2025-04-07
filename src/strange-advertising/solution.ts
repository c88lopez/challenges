function StrangeAdvertising(n: number): number {
  let shared = 5;
  let likes = 0;
  let cumulative = 0;

  for (let i = 0; i < n; i++) {
    likes = Math.floor(shared / 2);

    shared = likes * 3;

    cumulative += likes;
  }

  return cumulative;
}

export { StrangeAdvertising };
