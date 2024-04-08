var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let [l, r] = [0, nums.length - 1];
  count = 0;
  while (l < r) {
    let sum = nums[l] + nums[r];
    if (sum === k) {
      count++;
      l++;
      r--;
    } else if (sum > k) r--;
    else l++;
  }
  return count;
};

// Best Solution
// var maxOperations = function(nums, k) {
//   let count = 0;
//   let map = new Map();

//   for (const num of nums) {
//       if (num < k) {
//           const diff = k - num;

//           if (map.has(diff) && map.get(diff) > 0) {
//               map.set(diff, map.get(diff) - 1);
//               count++;
//           }
//           else {
//               map.set(num, (map.get(num) || 0) + 1);
//           }
//       }
//   }

//   return count;
// };

console.log(maxOperations([1, 2, 3, 4], 5)); // 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
