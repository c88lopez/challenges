function pickingNumbers(a: number[]): number {
  // Write your code here

  const numbersCount = new Map<number, number>();

  a.sort().forEach((number) => {
    let count = 1;

    if (numbersCount.has(number)) {
      count = numbersCount.get(number) + 1;
    }

    numbersCount.set(number, count);
  });

  const numberCountTupleList = Array.from(numbersCount.entries());

  let length = 1;

  for (let i = 0; i < numberCountTupleList.length; i++) {
    // Case when we are at the last item in the tuple list
    if (!numberCountTupleList[i + 1]) {
      if (numberCountTupleList[i][1] > length) {
        length = numberCountTupleList[i][1];
        break;
      }

      break;
    }

    const distance =
      numberCountTupleList[i + 1][0] - numberCountTupleList[i][0];

    // If next number distance with current is between 0 and 1
    if (distance > 0 && distance <= 1) {
      if (
        length <
        numberCountTupleList[i + 1][1] + numberCountTupleList[i][1]
      ) {
        length = numberCountTupleList[i + 1][1] + numberCountTupleList[i][1];
      }
    }

    // Case when current number distance from next is bigger than 1
    if (numberCountTupleList[i][1] > length) {
      length = numberCountTupleList[i][1];
    }
  }

  return length;
}

export { pickingNumbers };
