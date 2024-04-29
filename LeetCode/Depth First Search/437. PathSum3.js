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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;
  let count = 0;
  const sumCount = (root, list) => {
    if (!root) return 0;
    list.push(root.val);
    let sum = 0;
    for (let i = list.length - 1; i >= 0; i--) {
      sum += list[i];
      if (sum === targetSum) {
        count++;
      }
    }
    sumCount(root.left, list);
    sumCount(root.right, list);
    list.pop();
  };
  sumCount(root, []);
  return count;
};
