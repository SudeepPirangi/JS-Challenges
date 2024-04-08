var findMaxAverage = function (nums, k) {
  let max = nums.slice(0, k).reduce((sum, elem) => sum + elem, 0);
  let sum = max;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    max = Math.max(max, sum);
  }
  return max / k;
};

console.log("🚀 ~ findMaxAverage:", findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.7500
console.log("🚀 ~ findMaxAverage:", findMaxAverage([5], 1)); // 5.0000
console.log("🚀 ~ findMaxAverage:", findMaxAverage([0, 1, 1, 3, 3], 4)); // 2.0000
console.log("🚀 ~ findMaxAverage:", findMaxAverage([4, 0, 4, 3, 3], 5)); // 2.8000
