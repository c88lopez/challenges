function theHurdleRace(k: number, height: number[]): number {
  return height.reduce<number>((doses, currentHight) => {
    const dosesNeeded = currentHight - k - doses;
    if (dosesNeeded > 0) {
      return doses + dosesNeeded;
    }

    return doses;
  }, 0);
}

export { theHurdleRace };
