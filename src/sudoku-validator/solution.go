package sudoku_validator

func hasRepeatedNumbers(list [9]int32) bool {
	numbersMap := make(map[int32]bool)

	for _, number := range list {
		if number == 0 {
			continue
		}

		if numbersMap[number] {
			return true
		}

		numbersMap[number] = true
	}

	return false
}

func SudokuValidator(sudoku [9][9]int32) bool {

	for _, row := range sudoku {
		if hasRepeatedNumbers(row) {
			return false
		}
	}

	for rowIndex, _ := range sudoku {
		column := [9]int32{}

		for columnIndex, _ := range sudoku[rowIndex] {
			column[columnIndex] = sudoku[columnIndex][rowIndex]
		}

		if hasRepeatedNumbers(column) {
			return false
		}

		column = [9]int32{0, 0, 0, 0, 0, 0, 0, 0, 0}
	}

	return true
}
