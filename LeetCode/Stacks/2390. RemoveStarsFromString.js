/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let chars = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "*") chars.push(s[i]);
    else chars.pop();
  }
  return chars.join("");
};

console.log(removeStars("leet**cod*e")); // lecoe
console.log(removeStars("erase*****")); //
