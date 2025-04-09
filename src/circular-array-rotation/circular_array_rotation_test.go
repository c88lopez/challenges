package circular_array_rotation

import (
	"fmt"
	"testing"
)

type testTableRow struct {
	a        []int32
	k        int32
	queries  []int32
	expected []int32
}

func TestCircularArrayRotation(t *testing.T) {
	var testTable = []testTableRow{
		{[]int32{3, 4, 5}, 0, []int32{0, 1, 2}, []int32{3, 4, 5}},
		{[]int32{3, 4, 5}, 1, []int32{0, 1, 2}, []int32{5, 3, 4}},
		{[]int32{3, 4, 5}, 2, []int32{0, 1, 2}, []int32{4, 5, 3}},
		{[]int32{3, 4, 5}, 3, []int32{0, 1, 2}, []int32{3, 4, 5}},
		{[]int32{3, 4, 5}, 4, []int32{0, 1, 2}, []int32{5, 3, 4}},
		{[]int32{3, 4, 5}, 5, []int32{0, 1, 2}, []int32{4, 5, 3}},
		{[]int32{3, 4, 5}, 6, []int32{0, 1, 2}, []int32{3, 4, 5}},
		{[]int32{3, 4, 5, 6, 7, 8}, 1, []int32{0, 1, 2, 3, 4, 5}, []int32{8, 3, 4, 5, 6, 7}},
		{[]int32{3, 4, 5, 6, 7, 8}, 4, []int32{0, 1, 2, 3, 4, 5}, []int32{5, 6, 7, 8, 3, 4}},
		{[]int32{39356, 87674, 16667, 54260, 43958, 70429, 53682, 6169, 87496, 66190, 90286, 4912, 44792, 65142, 36183, 43856, 77633, 38902, 1407, 88185, 80399, 72940, 97555, 23941, 96271, 49288, 27021, 32032, 75662, 69161, 33581, 15017, 56835, 66599, 69277, 17144, 37027, 39310, 23312, 24523, 5499, 13597, 45786, 66642, 95090, 98320, 26849, 72722, 37221, 28255, 60906}, 51, []int32{47}, []int32{72722}},
	}

	for _, testRow := range testTable {
		testName := fmt.Sprintf(
			`circularArrayRotation(%v, %d, %v)`,
			testRow.a, testRow.k, testRow.queries,
		)

		t.Run(testName, func(t *testing.T) {
			rotated := circularArrayRotation(testRow.a, testRow.k, testRow.queries)

			for i := range rotated {
				if rotated[i] != testRow.expected[i] {
					t.Errorf(`invalid rotated value - expected %v, got %v`, testRow.expected, rotated)
				}
			}
		})
	}
}
