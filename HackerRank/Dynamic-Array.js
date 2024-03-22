/**
 * Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed.
Declare an integer, lastAnswer, and initialize it to 0.

There are 2 types of queries, given as an array of strings for you to parse:

Query: 1 x y
Let idx = ((x ^ lastAnswer) % n).
Append the integer y to arr[idx].
Query: 2 x y
Let idx = ((x ^ lastAnswer) % n).
Assign the value arr[idx][y % size(arr[idx])] to lastAnswer.
Store the new value of lastAnswer to an answers array.

Finally, size(arr[idx]) is the number of elements in arr[idx]

Function Description

Complete the dynamicArray function below.

dynamicArray has the following parameters:
- int n: the number of empty arrays to initialize in 
- string queries[q]: query strings that contain 3 space-separated integers

Returns

int[]: the results of each type 2 query in the order they are presented
 */

function dynamicArray(n, queries) {
  // Write your code here
  const arr = new Array(n).fill([]);
  let lastAnswer = 0;
  const answers = [];
  // console.log(n, queries, arr);
  for (let i = 0; i < queries.length; i++) {
    const [query, x, y] = queries[i];
    let idx = (x ^ lastAnswer) % n;
    if (query === 1) {
      arr[idx] = [...arr[idx], y];
    } else if (query === 2) {
      lastAnswer = arr[idx][y % arr[idx].length];
      answers.push(lastAnswer);
    }
  }
  return answers;
}

console.log(
  dynamicArray(2, [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1],
  ])
);
