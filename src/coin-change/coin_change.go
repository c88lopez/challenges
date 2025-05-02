package coin_change

func CoinChange(coinDenominations []int32, amount int32) int32 {
	var i, newAmount, coinCount int32

	coinCount = 0
	newAmount = amount

	denominationsLength := int32(len(coinDenominations))

	/*
		We loop from the biggest denomination and check how many of that we need.
		With that value, we subtract the amount and proceed to the following
		denomination.
	*/
	for i = denominationsLength - 1; i > -1; i-- {
		denominationAmount := newAmount / coinDenominations[i]

		if denominationAmount > 0 {
			coinCount += denominationAmount
			newAmount -= denominationAmount * coinDenominations[i]
		}
	}

	/*
		If new amount could not be set to 0, means there is no way to give the
		change
	*/
	if newAmount == 0 {
		return coinCount
	}

	return -1
}
