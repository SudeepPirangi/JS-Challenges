function arrayManipulation(n, queries) {
  // Write your code here
  const arr = new Array(n).fill(0);
  for (let query of queries) {
    arr[query[0] - 1] += query[2];
    if (query[1] < n) arr[query[1]] -= query[2];
  }
  console.log(arr);
  let max = 0;
  let itr = 0;
  for (let elem of arr) {
    itr += elem;
    if (itr > max) max = itr;
  }
  return max;
}

console.log(
  arrayManipulation(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ])
);
console.log(
  arrayManipulation(10, [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15],
  ])
);
