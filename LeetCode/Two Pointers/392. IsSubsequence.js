var isSubsequence = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    let index = t.indexOf(s[i]);
    if (index === -1) return false;
    t = t.slice(index + 1);
  }
  return true;
};

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("acb", "ahbgdc")); // false
console.log(isSubsequence("axc", "ahbgdc")); // false
