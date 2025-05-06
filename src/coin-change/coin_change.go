package coin_change

func CoinChange(coinDenominations []int, amount int) int {
	if amount == 0 {
		return 0
	}

	coinDenominationsLen := len(coinDenominations)

	if coinDenominationsLen == 0 {
		return -1
	}

	changeByAmount := make([]int, amount+1)
	changeByAmount[0] = 0

	changeByAmountLen := len(changeByAmount)

	// Filling the list with initial values
	for currentAmount := 1; currentAmount < changeByAmountLen; currentAmount++ {
		changeByAmount[currentAmount] = -1
	}

	for currentAmount := 1; currentAmount < changeByAmountLen; currentAmount++ {

		for i := 0; i < coinDenominationsLen; i++ {
			diff := currentAmount - coinDenominations[i]

			if diff < 0 {
				break
			}

			if changeByAmount[diff] == -1 {
				continue
			}

			if changeByAmount[currentAmount] == -1 {
				changeByAmount[currentAmount] = changeByAmount[diff] + 1
			} else {
				if changeByAmount[currentAmount] > (changeByAmount[diff] + 1) {
					changeByAmount[currentAmount] = changeByAmount[diff] + 1
				}
			}
		}

	}

	return changeByAmount[amount]
}
