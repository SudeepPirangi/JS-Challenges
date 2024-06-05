function inOrder(root) {
  if (!root) return;
  if (root.left) inOrder(root.left);
  process.stdout.write(`${root.data} `);
  if (root.right) inOrder(root.right);
}
