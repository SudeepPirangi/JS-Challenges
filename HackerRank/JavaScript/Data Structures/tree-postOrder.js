function postOrder(root) {
  if (root.left) postOrder(root.left);
  if (root.right) postOrder(root.right);
  process.stdout.write(`${root.data} `);
}
