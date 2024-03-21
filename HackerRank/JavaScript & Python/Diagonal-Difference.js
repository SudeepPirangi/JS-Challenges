/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
 */

function diagonalDifference(arr) {
  // Write your code here
  let ltr = 0;
  let i = 0;
  let j = 0;
  while (i < arr.length && j < arr.length) {
    ltr += arr[i][j];
    i++;
    j++;
  }

  let rtl = 0;
  i = 0;
  j = arr[0].length - 1;
  while (i <= arr.length - 1 && j >= 0) {
    rtl += arr[i][j];
    i++;
    j--;
  }
  console.log(ltr, rtl);
  return Math.abs(ltr - rtl);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
