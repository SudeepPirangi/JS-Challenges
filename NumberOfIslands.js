/**
 * JavaScript program to find number of islands in the given input
 * and also the largest among them
 * @param {*} input
 * @returns
 */

const getNumberOfIslands = (input) => {
  const counter = [];
  const visited = new Set([]);

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      let size = 0;

      const dfs = (row, col) => {
        if (
          row < 0 ||
          row === input.length ||
          col < 0 ||
          col === input[0].length
        )
          return;
        if (!input[row][col] || visited.has(`${row}${col}`)) return;
        visited.add(`${row}${col}`);
        size++;
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row + 1, col);
        dfs(row, col - 1);
      };

      dfs(i, j);
      if (size) counter.push(size);
    }
  }

  return [counter.length, Math.max(...counter)]; // [total_islands, biggest_island]
};

console.log(
  getNumberOfIslands([
    [1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1],
  ])
);

console.log(
  getNumberOfIslands([
    [1, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 1],
    [1, 1, 0, 0, 1, 1],
  ])
);

console.log(
  getNumberOfIslands([
    [1, 1, 0, 0, 1, 1],
    [0, 1, 1, 1, 0, 1],
    [1, 1, 0, 0, 1, 1],
  ])
);

console.log(
  getNumberOfIslands([
    [1, 1, 0, 0, 1, 1],
    [0, 1, 1, 1, 0, 1],
    [1, 1, 0, 1, 1, 1],
  ])
);
