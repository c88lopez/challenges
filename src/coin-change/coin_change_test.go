package coin_change

import (
	"fmt"
	"testing"
)

func TestCoinChange(t *testing.T) {
	datatable := []struct {
		coinDenominations []int32
		amount            int32
		expected          int32
	}{
		{[]int32{1, 2, 5}, 11, 3},
		{[]int32{2}, 3, -1},
		{[]int32{1}, 3, 3},
		{[]int32{2, 5}, 8, -1},
		{[]int32{1}, 0, 0},
	}

	for _, dataRow := range datatable {
		t.Run(fmt.Sprintf(
			"for denominations = %v and amount %d, we expected %d coints",
			dataRow.coinDenominations, dataRow.amount, dataRow.expected,
		), func(t *testing.T) {
			result := CoinChange(dataRow.coinDenominations, dataRow.amount)

			if result != dataRow.expected {
				t.Errorf("expected %d, got %d", dataRow.expected, result)
			}
		})

	}
}
