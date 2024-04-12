/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let map = {};
  let count = 0;
  for (let row of grid) {
    let str = row.join("-");
    map[str] = (map[str] || 0) + 1;
  }
  for (let i = 0; i < grid.length; i++) {
    let ver = [];
    for (let j = 0; j < grid.length; j++) {
      ver.push(grid[j][i]);
    }
    ver = ver.join("-");
    if (map[ver]) {
      count += map[ver];
    }
  }
  return count;
};

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
); // 1

console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
); // 3

console.log(
  equalPairs([
    [11, 1],
    [1, 11],
  ])
); // 2

console.log(
  equalPairs([
    [13, 13],
    [13, 13],
  ])
); // 4
