var kidsWithCandies = function (candies, extraCandies) {
  const result = [];
  const max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    result[i] = candies[i] + extraCandies >= max;
  }
  return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
