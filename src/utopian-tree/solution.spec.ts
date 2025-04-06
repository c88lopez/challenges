describe("Utopian Tree", () => {
  it.each([[5, 14]])(
    "with period %d should get height %d",
    (periods, height) => {
      expect(UtopianTree(periods)).toBe(height);
    },
  );
});
