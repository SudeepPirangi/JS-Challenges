function insertNodeAtHead(head, data) {
  console.log(head, data);
  const node = new SinglyLinkedListNode(data);
  if (head) {
    node.next = head;
    return node;
  }
  return node;
}
