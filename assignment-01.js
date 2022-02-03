function minMax(arr) {
  const result = [Math.min(...arr), Math.max(...arr)];
  return result;
}

console.log(minMax([1, 2, 3, 4, 5])); // ➞ [1, 5]
console.log(minMax([2334454, 5])); // ➞ [5, 2334454]
console.log(minMax([1])); // ➞ [1, 1]
