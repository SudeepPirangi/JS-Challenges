var solve = function (board) {
  const makeT = (r, c) => {
    if (
      r < 0 ||
      c < 0 ||
      r === board.length ||
      c === board[0].length ||
      board[r][c] !== "O"
    )
      return;
    board[r][c] = "T";
    makeT(r - 1, c);
    makeT(r + 1, c);
    makeT(r, c - 1);
    makeT(r, c + 1);
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (
        board[i][j] === "O" &&
        (i === 0 ||
          j === 0 ||
          i === board.length - 1 ||
          j === board[0].length - 1)
      ) {
        makeT(i, j);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = board[i][j] === "T" ? "O" : "X";
    }
  }

  return board;
};

console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);
