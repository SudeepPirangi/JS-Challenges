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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  while (queue.length) {
    let right = null;
    let len = queue.length; // capture length before manipulating queue
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node) {
        right = node;
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (right) {
      res.push(right.val);
    }
  }
  return res;
};
