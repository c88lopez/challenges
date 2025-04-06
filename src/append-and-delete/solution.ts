function AppendAndDelete(s: string, t: string, k: number): string {
  let neededOperations = 0;
  let sinceNotEqualIndex = 0;

  // Search index from where first char does not match
  for (; sinceNotEqualIndex < s.length; sinceNotEqualIndex++) {
    if (s[sinceNotEqualIndex] !== t[sinceNotEqualIndex]) {
      break;
    }
  }

  // Count the removal operations
  for (let i = sinceNotEqualIndex; i < s.length; i++) {
    neededOperations++;
  }

  // Count the append operations
  for (let i = sinceNotEqualIndex; i < t.length; i++) {
    neededOperations++;
  }

  if (k < neededOperations) {
    return "No";
  }

  if (k === neededOperations) {
    return "Yes";
  }

  // Case where k is big enough to remove all and replace
  if (k >= neededOperations + sinceNotEqualIndex * 2) {
    return "Yes";
  }

  // Case where k should be enough to delete not needed chars
  // + append needed chars
  // + remove and replace common chars
  if ((k - neededOperations) % 2 === 1) {
    return "No";
  }

  return "Yes";
}

export { AppendAndDelete };

/*

abcd

abcef


1 delete => a b c

1 append => a b c e

1 append => a b c e f

 */
