/**
 * Complete the preOrder function in the editor below, which has 1 parameter: a pointer to the root of a binary tree. It must print the values in the tree's preorder traversal as a single line of space-separated values.

Input Format

Our test code passes the root node of a binary tree to the preOrder function.

Output Format

Print the tree's preorder traversal as a single line of space-separated values.
Sample Input

     1
      \
       2
        \
         5
        /  \
       3    6
        \
         4  
Sample Output

1 2 5 3 4 6 
 */

function getLeaves(node) {
  let leaves = [node.data];
  if (node.left) leaves = [...leaves, ...getLeaves(node.left)];
  if (node.right) leaves = [...leaves, ...getLeaves(node.right)];
  return leaves;
}

function preOrder(root) {
  console.log(getLeaves(root).join(" "));
  return;
}
