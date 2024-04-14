/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    // console.log("for", stack, s[i]);
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let str = "";
      while (stack[stack.length - 1] !== "[") {
        str = stack.pop() + str;
      }
      // console.log("str", str);
      stack.pop();
      let num = "";
      while (!isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num;
      }
      // console.log("num", num);
      num = +num;
      let result = "";
      for (let j = 1; j <= num; j++) {
        result += str;
      }
      stack.push(result);
    }
  }
  return stack.join("");
};

console.log(decodeString("3[a]2[bc]")); // aaabcbc
console.log(decodeString("3[a2[c]]")); // accaccacc
console.log(decodeString("2[abc]3[cd]ef")); // abcabccdcdcdef
