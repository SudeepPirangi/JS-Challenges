// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
  // Write your code here
  console.log("arr", arr);
  const sortedArray = arr.sort((a, b) => a - b);
  let median = undefined;
  if (arr.length % 2 === 0) {
    const middleIndex = arr.length / 2;
    median = (sortedArray[middleIndex] + sortedArray[middleIndex - 1]) / 2;
  } else {
    median = sortedArray[Math.floor(arr.length / 2)];
  }
  console.log(sortedArray);
  return median;
}

console.log(findMedian([0, 5, 8, 2, 9, 4, 6]));
console.log(findMedian([0, 5, 8, 2, 9, 4]));
