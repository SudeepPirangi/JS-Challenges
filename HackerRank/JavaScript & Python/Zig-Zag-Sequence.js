/**
 * In this challenge, the task is to debug the existing code to successfully execute all provided test files.

Given an array of  distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first  elements in the sequence are in increasing order and the last  elements are in decreasing order, where . You need to find the lexicographically smallest zig zag sequence of the given array.

Example.
a = [ 2, 3, 5, 1, 4]

Now if we permute the array as [1, 4, 5, 3, 2], the result is a zig zag sequence.

Debug the given function findZigZagSequence to return the appropriate zig zag sequence for the given input array.

Note: You can modify at most three lines in the given code. You cannot add or remove lines of code.

To restore the original code, click on the icon to the right of the language selector.
 */

// Note: This code wouldn't work in Hacker Rank's JS, so I gave a python solution to clear this test

function findZigZagSequence(rawArray) {
  const array = rawArray.sort((a, b) => a - b);
  let mid = Math.ceil((array.length - 1) / 2);
  let max = array.length - 1;

  while (mid < max) {
    if (array[max] > array[mid]) {
      [array[mid], array[max]] = [array[max], array[mid]];
    }
    mid++;
    max--;
  }
  console.log(array.join(" "));
  return array.join(" ");
}

function processData(input) {
  //Enter your code here
  const givenInput = input.split("\n");
  const array = givenInput[givenInput.length - 1]
    .split(" ")
    .map((element) => +element);

  return findZigZagSequence(array);
}

const input = `20
105
9 47 14 57 26 80 61 76 64 99 39 42 44 58 1 81 100 18 62 63 72 87 85 65 97 46 96 27 4 45 28 38 89 3 101 17 92 84 52 16 20 86 77 32 53 79 23 8 36 82 13 34 90 88 91 71 31 6 29 70 73 21 98 37 24 33 67 25 75 19 40 94 12 49 54 68 15 59 83 66 78 95 69 2 51 11 43 22 50 30 41 104 10 60 5 102 48 74 103 105 93 35 7 56 55`;

const desiredOutput = `1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 105 104 103 102 101 100 99 98 97 96 95 94 93 92 91 90 89 88 87 86 85 84 83 82 81 80 79 78 77 76 75 74 73 72 71 70 69 68 67 66 65 64 63 62 61 60 59 58 57 56 55 54 53`;

const caluclatedOutput = processData(input);

console.log(caluclatedOutput === desiredOutput);
