/**
 * From a string, the function will return the 1-based index of the first unique
 * char in the string, or -1 if there are no unique chars.
 */
export const FirstUniqueNumber = (s: string): number => {
  const charList = s.split("");

  for (let i = 0; i < charList.length; i++) {
    const currentChar = charList[i];

    const found = charList.some(
      (char, index) => char === currentChar && index !== i,
    );

    if (!found) {
      // This means currentChar is unique
      return i + 1;
    }
  }

  return -1;
};
