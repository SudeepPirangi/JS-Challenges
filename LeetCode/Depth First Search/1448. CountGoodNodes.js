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
var goodNodes = function (root) {
  if (!root) return 0;

  let count = 0;
  let dfs = (node, m) => {
    if (!node) return 0;
    if (node.val >= Math.max(node.val, m)) {
      m = node.val;
      count++;
    }
    dfs(node.left, m);
    dfs(node.right, m);
  };

  dfs(root, -Infinity);

  return count;
};
