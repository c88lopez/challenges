package save_the_prisoner

/**
 * n Number of prisoners
 * m number of sweets
 * s starting chair number
 *
 * returns chair number of the prisoner to warn
 */
func saveThePrisoner(n int32, m int32, s int32) int32 {

	r := m % n

	if s+r > n {
		if r+s-n-1 == 0 {
			return s
		}

		return r + s - n - 1
	}

	return r - 1 + s
}
