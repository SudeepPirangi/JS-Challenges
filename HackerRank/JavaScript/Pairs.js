/**
 * Return the number of pairs in the given array whose difference is equal to k
 * @param {integer} k difference to be compared with
 * @param {*} arr array of integers
 * @returns
 */

function pairs(k, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === k) {
        count++;
      }
    }
  }
  return count;
}

console.log(pairs(2, [1, 5, 3, 4, 2]));
