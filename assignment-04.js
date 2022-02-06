function func(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}

console.log(func([1, 3, 3, 5, 5])); // ➞ [1, 3, 5]
console.log(func([4, 4, 4, 4])); // ➞ [4]
console.log(func([5, 7, 8, 9, 10, 15])); // ➞ [5, 7, 8, 9, 10, 15]
console.log(func([3, 3, 3, 2, 1])); // ➞ [1, 2, 3]
