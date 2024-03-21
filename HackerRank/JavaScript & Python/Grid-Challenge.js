/**
 * Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.
 * grid = ['abc', 'ade', 'efg']
 * The rows are already in alphabetical order. The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES. Only elements within the same row can be rearranged. They cannot be moved to a different row.
 */

function columnCompare(grid) {
  let isAscending = true;
  for (let j = 0; j < grid.length; j++) {
    for (let i = 1; i < grid.length; i++) {
      if (grid[i][j] < grid[i - 1][j]) {
        isAscending = false;
        break;
      }
    }
  }
  return isAscending;
}

function rowCompare(grid) {
  let isAscending = true;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 1; j < grid.length; j++) {
      if (grid[i][j] < grid[i][j - 1]) {
        isAscending = false;
        break;
      }
    }
  }
  return isAscending;
}

function gridChallenge(grid) {
  // Write your code here
  const result = "YES";
  if (rowCompare(grid) && columnCompare(grid)) return result;
  for (let i = 0; i < grid.length; i++) {
    grid[i] = [...grid[i]].sort().join("");
    if (rowCompare(grid) && columnCompare(grid)) return result;
  }
  return "NO";
}

console.log(gridChallenge(["abc", "ade", "efg"]));
console.log(gridChallenge(["eabcd", "fghij", "olkmn", "trpqs", "xywuv"]));
console.log(gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]));
