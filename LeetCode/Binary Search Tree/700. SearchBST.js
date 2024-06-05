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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  const dfs = (node) => {
    if (!node) return null;
    if (val > node.val) return dfs(node.right);
    else if (val < node.val) return dfs(node.left);
    else return node;
  };
  return dfs(root);
};

var searchBST = function (root, val) {
  if (!root) return null;
  let curr = root;
  while (curr) {
    if (curr.val === val) return curr;
    else curr = val > curr.val ? curr.right : curr.left;
  }
  return null;
};
