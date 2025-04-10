package permutation_equation

func permutationEquation(p []int32) []int32 {
	var i, j, k int32

	var permuted []int32

	pLen := int32(len(p))

	for i = 1; i <= pLen; i++ {
		for j = 0; j < pLen; j++ {
			if p[j] == i {
				for k = 0; k < pLen; k++ {
					if p[k] == j+1 {
						permuted = append(permuted, k+1)
					}
				}
			}
		}
	}

	return permuted
}
