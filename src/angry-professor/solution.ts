function AngryProfessor(k: number, a: number[]): string {
  const onTimeStudents = a.filter((delta) => delta <= 0).length;

  return onTimeStudents >= k ? "NO" : "YES";
}

export { AngryProfessor };
