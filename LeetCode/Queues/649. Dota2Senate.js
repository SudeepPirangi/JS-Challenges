/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let senateArr = senate.split("");
  let stack = [];
  for (let s of senateArr) {
    if (!stack.length || stack[stack.length - 1] === s) {
      stack.push(s);
    } else {
      senateArr.push(stack.pop());
    }
  }
  return stack[0] === "R" ? "Radiant" : "Dire";
};

console.log(predictPartyVictory("RD")); // Radiant
console.log(predictPartyVictory("RDD")); // Dier
