/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  let freq1 = {};
  let freq2 = {};
  for (let i = 0; i < word1.length; i++) {
    freq1[word1[i]] = (freq1[word1[i]] ?? 0) + 1;
    freq2[word2[i]] = (freq2[word2[i]] ?? 0) + 1;
  }
  const keys = Object.keys(freq2);
  for (let [key, val] of Object.entries(freq1)) {
    let sort1 = Object.values(freq1)
      .sort((a, b) => a - b)
      .join("");
    let sort2 = Object.values(freq2)
      .sort((a, b) => a - b)
      .join("");
    if (sort1 !== sort2) return false;
    if (!keys.includes(key)) return false;
  }
  return true;
};

console.log(closeStrings("abc", "bca")); // true;
console.log(closeStrings("a", "aa")); // false;
console.log(closeStrings("cabbba", "abbccc")); // true;
console.log(closeStrings("abbbzcf", "babzzcz")); // false;
console.log(closeStrings("abbzzca", "babzzcz")); // false;
