/**
 * Given an array of integers, where all elements but one occur twice, find the unique element.

Example

The unique element is .
 */

// 1st approach
function lonelyinteger1(a) {
  // Write your code here
  const occurenceMap = {};
  for (let i = 0; i < a.length; i++) {
    if (occurenceMap[a[i]]) {
      occurenceMap[a[i]]++;
    } else {
      occurenceMap[a[i]] = 1;
    }
  }

  for (let each in occurenceMap) {
    if (occurenceMap[each] === 1) {
      return +each;
    }
  }
  return null;
}

// 2nd approach
function lonelyinteger(a) {
  let unique = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] !== unique) {
      unique = a[i];
    }
  }
  return unique;
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
console.log(lonelyinteger([1, 2, 4, 4, 3, 2, 1]));
