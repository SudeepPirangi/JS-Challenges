var longestOnes = function (nums, k) {
  let [start, end] = [0, 0];
  while (end < nums.length) {
    if (!nums[end]) k--;
    if (k < 0) {
      if (!nums[start]) k++;
      start++;
    }
    end++;
  }
  return end - start;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
); // 10
