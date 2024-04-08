var maxVowels = function (s, k) {
  let [start, end, count, max] = [0, 0, 0, 0];
  let vowels = ["a", "e", "i", "o", "u"];

  while (end < s.length) {
    if (vowels.includes(s[end])) count++;
    if (end - start + 1 > k) {
      if (vowels.includes(s[start])) count--;
      start++;
    }
    max = Math.max(count, max);
    end++;
  }

  return max;
};

console.log(maxVowels("abciiidef", 3)); // 3
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("leetcode", 3)); // 2
