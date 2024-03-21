/**
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
 */

const plusMinus = (arr) => {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let num of arr) {
    if (num > 0) positive++;
    else if (num < 0) negative++;
    else zero++;
  }
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
};

plusMinus([-4, 3, -9, 0, 4, 1]);
