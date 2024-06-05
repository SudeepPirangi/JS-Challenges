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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return root;

  if (root.val === key) {
    if (!root.left && !root.right) return null;

    if (root.left && root.right) {
      let curr = root.right;
      while (curr.left) curr = curr.left;
      curr.left = root.left;
      return root.right;
    }

    if (!root.left) return root.right;
    if (!root.right) return root.left;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }

  return root;
};
