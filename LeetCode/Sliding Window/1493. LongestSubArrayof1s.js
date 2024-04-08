var longestSubarray = function (nums) {
  let [start, end, k] = [0, 0, 1];
  while (end < nums.length) {
    if (!nums[end]) k--;
    if (k < 0 && nums[start++] === 0) k++;
    end++;
  }
  return end - start - 1;
};

console.log(longestSubarray([1, 1, 0, 1])); // 3
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // 5
