/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  if (!root) return root;
  let maxLevel = 1;
  let max = -Infinity;
  let queue = [root];
  let level = 1;
  while (queue.length) {
    let sum = 0;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (sum > max) {
      max = sum;
      maxLevel = level;
    }
    level++;
  }
  return maxLevel;
};
