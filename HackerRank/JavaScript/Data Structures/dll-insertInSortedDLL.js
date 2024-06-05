function sortedInsert(llist, data) {
  // Write your code here
  if (!llist) return null;
  const newNode = new DoublyLinkedListNode(data);
  let head = llist;
  let curr = llist;
  while (curr) {
    if (curr.data > data) {
      if (curr.prev) {
        curr.prev.next = newNode;
      } else {
        // inserting at first position
        head = newNode;
      }
      newNode.prev = curr.prev;
      newNode.next = curr;
      curr.prev = newNode;
      console.log(newNode, curr.prev);
      break;
    }
    if (!curr.next) {
      // inserting at last position
      curr.next = newNode;
      newNode.prev = curr;
      break;
    }
    curr = curr.next;
  }
  return head;
}
