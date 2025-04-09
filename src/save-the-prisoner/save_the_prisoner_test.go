package save_the_prisoner

import (
	"fmt"
	"testing"
)

func TestSaveThePrisoner(t *testing.T) {
	var testTable = []struct {
		n, m, s  int32
		expected int32
	}{
		{3, 7, 3, 3},
		{4, 6, 2, 3},
		{5, 2, 1, 2},
		{5, 2, 2, 3},
		{7, 19, 2, 6},
		{5, 5, 1, 5},
		{987208066, 992914997, 534359308, 540066238},
		{829184434, 845745270, 142961264, 159522099},
		{64404787, 990499813, 50168775, 10191995},
		{973232645, 986655633, 434408426, 447831413},
		{650191283, 693567669, 248488463, 291864848},
		{387963979, 393752728, 124575669, 130364417},
		{386466373, 819226471, 169682152, 215975876},
		{352926151, 380324688, 94730870, 122129406},
	}

	for _, testRow := range testTable {
		testName := fmt.Sprintf(
			`saveThePrisoner(%d, %d, %d)`,
			testRow.n, testRow.m, testRow.s,
		)

		t.Run(testName, func(t *testing.T) {
			result := saveThePrisoner(testRow.n, testRow.m, testRow.s)
			if result != testRow.expected {
				t.Errorf("got %d, expected %d", result, testRow.expected)
			}
		})
	}
}
