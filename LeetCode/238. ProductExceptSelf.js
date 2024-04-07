var productExceptSelf = function (nums) {
  let result = [];

  let start = 1;
  for (let i = 0; i < nums.length; i++) {
    result.push(start);
    start *= nums[i];
  }

  let start2 = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= start2;
    start2 *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
console.log(productExceptSelf([2, 3, 5, 0])); // [0,0,0,30]
