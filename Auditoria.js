/**
 * Find the third largest
 */
let arr = [5, 4, 7, 1, 3, 8];
// let arr = [12, 11, 9, 1, 8, 99]

let max1 = -Infinity;
let max2 = -Infinity;
let max3 = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max1) {
    [max3, max2] = [max2, max1];
    max1 = arr[i];
  } else if (arr[i] > max2) {
    [max3, max2] = [max2, arr[i]];
  } else if (arr[i] > max3) {
    max3 = arr[i];
  }
}

console.log(max1, max2, max3);
console.log("Third highest", max3);

/**
 * Find the lowest index of the elements
 * that has duplicates in the list
 */

let a = [1, 3, 2, 5, 2, 3];

let counter = {};

for (let i = 0; i < a.length; i++) {
  if (counter[a[i]]) {
    counter[a[i]]++;
  } else {
    counter[a[i]] = 1;
  }
}

console.log(counter);

for (let i = 0; i < a.length; i++) {
  if (a[i] > 1) {
    console.log("minimum dup", i, a[i]);
    break;
  }
}
