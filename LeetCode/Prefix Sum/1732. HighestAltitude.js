/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0;
  let prev = 0;
  for (let i = 0; i < gain.length; i++) {
    // console.log(prev, gain[i], max);
    prev += gain[i];
    max = Math.max(max, prev);
  }
  return max;
};

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
