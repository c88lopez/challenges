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

	// From here we use dynamic programming method, which solves the main problem
	// by dividing it in smaller ones. From a smaller ones we reach the main one.

	// Using the coin denominations list, we go from amount 1 to the provided
	// amount. The solution for amount 1 will be used to get the solution for
	// amount 2, and so on.
	for currentAmount := 1; currentAmount < changeByAmountLen; currentAmount++ {

		for i := 0; i < coinDenominationsLen; i++ {
			diff := currentAmount - coinDenominations[i]

			// If the current amount is smaller than the coin denomination,
			// end the loop
			if diff < 0 {
				break
			}

			// If there is no solution on the previous step, move on
			if changeByAmount[diff] == -1 {
				continue
			}

			if changeByAmount[currentAmount] == -1 {
				// In here we need add one coin (from the current denomination
				// from the loop) to the first previous solution
				changeByAmount[currentAmount] = changeByAmount[diff] + 1
			} else {
				// This case represents we have one solution but we are looking
				// for the smaller amount of coins
				if changeByAmount[currentAmount] > (changeByAmount[diff] + 1) {
					changeByAmount[currentAmount] = changeByAmount[diff] + 1
				}
			}
		}

	}

	// Reached the end! we just return the last element of the list, which was
	// built using all previous solutions
	return changeByAmount[amount]
}
