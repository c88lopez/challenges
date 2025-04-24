export const FizzBuzz = (n: number) => {
  const values: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      values.push("FizzBuzz");
      continue;
    }

    if (i % 5 === 0) {
      values.push("Buzz");
      continue;
    }

    if (i % 3 === 0) {
      values.push("Fizz");
      continue;
    }

    values.push(i.toString());
  }

  return values;
};
