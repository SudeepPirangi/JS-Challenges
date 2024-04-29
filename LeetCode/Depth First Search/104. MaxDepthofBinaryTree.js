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
var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepth = function (root, depth = 0) {
  if (!root) return depth;

  depth++;

  let leftDepth = maxDepth(root.left, depth);
  let rightDepth = maxDepth(root.right, depth);

  return Math.max(leftDepth, rightDepth);
};
