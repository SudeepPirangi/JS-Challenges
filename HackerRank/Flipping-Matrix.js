/**
 * Sean invented a game involving a 2n. x 2n matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum of the elements in the t X n submatrix located in the upper-left quadrant of the matrix.
  Given the initial configurations for g matrices, help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.
  Example
  matriz=1,2,13,411
  1 2
  3 4
  It is 2 x 2 and we want to maximize the top left quadrant, a 1 x 1 matrix. Reverse row 1:
  1 2
  4 3
  And now reverse column 0:
  4 2
  1 3
  The maximal sum is 4.
  Function Description
  Complete the flippingMatrix function in the editor below. flippingMatrix has the following parameters:
  - int matrix[2n][2n]: a 2-dimensional array of integers
  Returns
  - int: the maximum sum possible.
 */

function flippingMatrix(matrix) {
  // Write your code here
  const n = matrix.length;
  let sum = 0;
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n / 2; j++) {
      sum += Math.max(
        matrix[i][j],
        matrix[i][n - j - 1],
        matrix[n - i - 1][j],
        matrix[n - i - 1][n - j - 1]
      );
    }
  }
  return sum;
}

const matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];
console.log(flippingMatrix(matrix));

// Note: This code isn't my knowledge, this is referenced and implemented from Youtube
// The original content deserves all the applause
// Who in the hell would think of n-j-1 or n-i-1
// and loop till n/2 only
