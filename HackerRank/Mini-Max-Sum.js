/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints

16 24
 */

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const reducer = (arr, exp_index) =>
  arr.reduce((acc, each, index) => acc + (index === exp_index ? 0 : each), 0);

function miniMaxSum(arr) {
  // Write your code here
  arr = arr.sort((a, b) => a - b);
  let commonSum = arr
    .slice(1, arr.length - 1)
    .reduce((sum, val) => sum + val, 0);
  console.log(arr[0] + commonSum, arr[arr.length - 1] + commonSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([5, 5, 5, 5, 5]);
