package circular_array_rotation

/*
 * a represents the list of numbers
 * k represents the numbers of rotations
 * queries the indexes to inform
 *
 * returns the values on queries indexes
 */
func circularArrayRotation(a []int32, k int32, queries []int32) []int32 {
	// k / a length will give the amount of rotations we can skip since a
	// length represents a full rotation.
	var queryArray []int32

	remainingRotations := k % int32(len(a))

	var indexToRetrieve int32

	if int32(len(a)) > k {
		remainingRotations = k
	}

	for _, v := range queries {
		indexToRetrieve = v - remainingRotations
		if indexToRetrieve < 0 {
			indexToRetrieve += int32(len(a))
		}

		queryArray = append(queryArray, a[indexToRetrieve])
	}

	return queryArray
}
