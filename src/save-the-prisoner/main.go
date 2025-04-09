package save_the_prisoner

/**
 * n Number of prisoners
 * m number of sweets
 * s starting chair number
 *
 * returns chair number of the prisoner to warn
 */
func saveThePrisoner(n int32, m int32, s int32) int32 {

	var prisoner int32

	r := m % n

	if r == 0 {
		prisoner = s
		if prisoner-1 == 0 {
			return n
		}
		return s - 1
	}

	if m > n {
		prisoner = s + r - 1
		if prisoner > n {
			return prisoner - n
		}

		return prisoner
	}

	// m < n
	prisoner = s + m - 1
	if prisoner > n {
		return prisoner - n
	}

	return prisoner
}
