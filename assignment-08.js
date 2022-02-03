function countOnes(arr) {
  const flat = arr.flat();
  let sum = 0;
  flat.forEach(i => {
    if (i === 1) sum++;
  });
  return sum;
}

console.log(
  countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
  ])
);

console.log(
  countOnes([
    [1, 0],
    [0, 0],
  ])
);

console.log(
  countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ])
);
