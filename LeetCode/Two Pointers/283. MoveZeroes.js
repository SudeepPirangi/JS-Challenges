var moveZeroes = function (nums) {
  if (nums && nums.length === 1) return nums;
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      [nums[pos], nums[i]] = [nums[i], nums[pos]];
      pos++;
    }
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]

// pos = 0
// 0 1 0 3 12
// i
// 1 0 0 3 12
//   i
//   switch pos & j++
//   j = 1
// 1 0 0 3 12
//     i
// 1 0 0 3 12
//       i
//       switch i, j pos & j++
//       j = 2
// 1 3 0 0 12
//         i
//         switch i, j pos, j++
// 1 3 12 0 0
