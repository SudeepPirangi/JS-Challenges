/**
 * rotate left the elements of array by given d number of positions
 * @param {number} d - positions to rotateleft
 * @param {[number]} arr - result array after rotation
 * @returns
 */

function rotateLeft(d, arr) {
  return [...arr.slice(d, arr.length), ...arr.slice(0, d)];
}

console.log(rotateLeft(4, [1, 2, 3, 4, 5]));
