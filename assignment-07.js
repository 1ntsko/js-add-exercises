function sliceSum(arr, n) {
  const slicedArr = arr.slice(0, n);
  if (n !== 0) {
    return slicedArr.reduce((acc, curr) => acc + curr);
  }

  return 0;
}

console.log(sliceSum([1, 3, 2], 2)); // 4
console.log(sliceSum([4, 2, 5, 7], 4)); // 18
console.log(sliceSum([3, 6, 2], 0)); // 0
