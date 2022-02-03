function tuckIn(a, b) {
  return [a[0], ...b, a[1]];
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); // ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(tuckIn([15, 150], [45, 75, 35])); // ➞ [15, 45, 75, 35, 150]
console.log(
  tuckIn(
    [
      [1, 2],
      [5, 6],
    ],
    [[3, 4]]
  )
); // ➞ [[1, 2], [3, 4], [5, 6]]
