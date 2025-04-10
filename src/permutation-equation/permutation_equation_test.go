package permutation_equation

import (
	"fmt"
	"testing"
)

func TestPermutationEquation(t *testing.T) {
	var testTable = []struct {
		p, expected []int32
	}{
		{[]int32{5, 2, 1, 3, 4}, []int32{4, 2, 5, 1, 3}},
		{[]int32{4, 3, 5, 1, 2}, []int32{1, 3, 5, 4, 2}},
		{[]int32{2, 3, 1}, []int32{2, 3, 1}},
	}

	for _, testRow := range testTable {
		testName := fmt.Sprintf(`permutationEquation(%v)`, testRow.p)

		t.Run(testName, func(t *testing.T) {
			result := permutationEquation((testRow.p))

			if len(testRow.expected) != len(result) {
				t.Errorf(
					`invalid result - expected %v, got %v`,
					testRow.expected, result,
				)
			} else {
				for i := range testRow.expected {
					if result[i] != testRow.expected[i] {
						t.Errorf(
							`invalid result - expected %v, got %v`,
							testRow.expected, result,
						)
					}
				}
			}
		})
	}
}
