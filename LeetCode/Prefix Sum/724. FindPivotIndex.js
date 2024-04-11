/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const total = nums.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum * 2 === total - nums[i]) return i;
    leftSum += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
console.log(pivotIndex([-1, -1, -1, -1, -1, 0])); // 2
