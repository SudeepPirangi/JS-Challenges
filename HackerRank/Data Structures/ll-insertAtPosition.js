function insertNodeAtPosition(llist, data, position) {
  // Write your code here
  console.log(llist, data, position);
  const node = new SinglyLinkedListNode(data);
  if (!llist) {
    return node;
  }
  if (position === 0) {
    node.next = llist;
    return node;
  }
  let i = 1;
  let head = llist;
  let prev = head;
  while (prev.next) {
    if (i === position) {
      let temp = prev.next;
      prev.next = node;
      node.next = temp;
      break;
    }
    prev = prev.next;
    i++;
  }
  return head;
}
