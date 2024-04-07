var increasingTriplet = function (nums) {
  let [left, mid] = [Infinity, Infinity];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > mid) {
      return true;
    }
    if (nums[i] < left) {
      left = nums[i];
    } else if (nums[i] > left && nums[i] < mid) {
      mid = nums[i];
    }
  }
  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // true
console.log(increasingTriplet([20, 100, 10, 12, 5, 13])); // true
