/**
 * Validator for the popular game Sudoku.
 *
 * numbers on each row, each column and each 3x3 box should be unique.
 */
function hasRepeatedNumbers(list: string[]): boolean {
  const numbers: string[] = [];

  return list.some((number) => {
    if (number === "") {
      return false;
    }

    if (numbers.includes(number)) {
      return true;
    }

    numbers.push(number);

    return false;
  });
}

export const SudokuValidator = (sudoku: string[][]): boolean => {
  // Easy, checks each row
  for (let rowNumber = 0; rowNumber < sudoku.length; rowNumber++) {
    if (hasRepeatedNumbers(sudoku[rowNumber])) {
      return false;
    }
  }

  // Easy-medium, checks each column
  for (let rowNumber = 0; rowNumber < sudoku.length; rowNumber++) {
    const column: string[] = [];

    for (
      let columnNumber = 0;
      columnNumber < sudoku[rowNumber].length;
      columnNumber++
    ) {
      column.push(sudoku[columnNumber][rowNumber]);
    }

    if (hasRepeatedNumbers(column)) {
      return false;
    }
  }

  // Medium, checks 3x3 boxes
  for (let rowNumber = 0; rowNumber < 9; rowNumber += 3) {
    for (let columnNumber = 0; columnNumber < 9; columnNumber += 3) {
      const box = [
        ...sudoku[rowNumber].slice(columnNumber, columnNumber + 3),
        ...sudoku[rowNumber + 1].slice(columnNumber, columnNumber + 3),
        ...sudoku[rowNumber + 2].slice(columnNumber, columnNumber + 3),
      ];

      if (hasRepeatedNumbers(box)) {
        return false;
      }
    }
  }

  return true;
};
