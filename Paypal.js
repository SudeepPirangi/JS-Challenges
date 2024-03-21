/* Problem 1 */

const inputArr = [1, 0, 0, 0, 0];
const inputArr2 = [0, 0, 0, 0, 1, 1, 0, 1, 0];
const inputArr3 = "0011001111".split("").map((digit) => +digit);

const counter = (inputArr) => {
  let counter = 0;
  let flag = false;
  inputArr.forEach((elem, index) => {
    if (elem) {
      if (!flag) {
        flag = true;
        ++counter;
      }
    } else {
      flag = false;
    }
  });
  return counter;
};

const reduceCounter = (inputArr3) => {
  return true;
};

console.log("String Counter", counter(inputArr3));

/* Problem 2 */

let input = [
  "110011".split("").map((digit) => +digit),
  "001100".split("").map((digit) => +digit),
  "110011".split("").map((digit) => +digit),
];

let matrixCounter = 0;
let visited = [];
const rows = input.length;
const cols = input[0].length;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] && !isVisited(i, j)) {
      ++matrixCounter;
      visited.push(`${i}${j}`);
      checkOthers(i, j);
    }
  }
}

console.log("Matrix Counter", matrixCounter);

function isVisited(row, col) {
  return visited.includes(`${row}${col}`);
}

function getNeighbours(row, col) {
  let top = row - 1 >= 0 ? [row - 1, col] : null;
  let right = col + 1 < cols ? [row, col + 1] : null;
  let bottom = row + 1 < rows ? [row + 1, col] : null;
  let left = col - 1 >= 0 ? [row, col - 1] : null;
  return [top, right, bottom, left];
}

function checkOthers(row, col) {
  let neighbours = getNeighbours(row, col);
  neighbours.forEach((neighbour) => {
    if (neighbour) {
      let [thisRow, thisCol] = neighbour;
      if (input[thisRow][thisCol] && !isVisited(thisRow, thisCol)) {
        visited.push(`${thisRow}${thisCol}`);
        checkOthers(thisRow, thisCol);
      }
      return;
    }
    return;
  });
}
