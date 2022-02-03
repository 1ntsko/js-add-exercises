function regexFormatter(arr) {
  const cleaned = String(arr).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
}

function formatPhoneNumber(arr) {
  const one = arr.slice(0, 3);
  const two = arr.slice(3, 6);
  const three = arr.slice(6, 10);
  const phoneNumber = `(${one}) ${two}-${three}`;
  return phoneNumber.replaceAll(',', '');
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // ➞ "(123) 456-7890"
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); // ➞ "(519) 555-4468"
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); // ➞ "(345) 501-2527"
