var uniqueOccurrences = function (arr) {
  let freq = {};
  arr.forEach((num) => {
    freq[num] = freq[num] ? freq[num] + 1 : 1;
  });
  return new Set([...Object.values(freq)]).size === Object.entries(freq).length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true
