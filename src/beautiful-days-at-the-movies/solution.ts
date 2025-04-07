function BeautifulDaysAtTheMovies(i: number, j: number, k: number): number {
  let beautifulDays = 0;

  for (let index = i; index <= j; index++) {
    const reversedIndex = Number(index.toString().split("").reverse().join(""));

    if ((index - reversedIndex) % k === 0) {
      beautifulDays++;
    }
  }

  return beautifulDays;
}

export { BeautifulDaysAtTheMovies };
