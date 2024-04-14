/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];
  for (let curr of asteroids) {
    while (stack && stack[stack.length - 1] > 0 && curr < 0) {
      let diff = curr + stack[stack.length - 1];
      if (diff < 0) stack.pop();
      else if (diff > 0) curr = 0;
      else {
        curr = 0;
        stack.pop();
      }
    }
    if (curr) stack.push(curr);
  }
  return stack;
};

console.log(asteroidCollision([5, 10, -5])); // [5, 10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]
console.log(asteroidCollision([-2, -2, 1, -2])); // [-2, -2, -2]
