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
var longestZigZag = function (root) {
  if (!root) return null;
  let max = 1;
  const zigzag = (node, direction, len) => {
    if (!node) return (max = Math.max(max, len));
    if (direction) {
      zigzag(node.right, !direction, len + 1);
      zigzag(node.left, direction, 1);
    } else {
      zigzag(node.left, !direction, len + 1);
      zigzag(node.right, direction, 1);
    }
  };

  zigzag(root.left, true, 1);
  zigzag(root.right, false, 1);

  return max - 1;
};
