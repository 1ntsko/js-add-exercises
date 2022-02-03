function toArray(number) {
  return String(number)
    .split('')
    .map(num => Number(num));
}

console.log(toArray(235));

function toNumber(arr) {
  return +String(arr).replaceAll(',', '');
}

console.log(toNumber([2, 3, 5]));
