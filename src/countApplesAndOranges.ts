function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  let falledApples: number = 0;
  let falledOranges: number = 0;
  apples.forEach((element) => {
    if (element+a >= s && element+a <= t) {
      falledApples++;
    }
  });
  oranges.forEach((element) => {
    if (element+b >= s && element+b <= t) {
      falledOranges++;
    }
  });
  console.log(falledApples);
  console.log(falledOranges);
}
console.log(countApplesAndOranges(7, 10, 5, 15, [-2, 2, 1], [5, 6]));
