function deleteNode(llist, position) {
  // Write your code here
  if (!llist) {
    return null;
  }
  if (position === 0) {
    return llist.next;
  }
  let i = 0;
  let head = llist;
  let prev = head;
  while (prev.next) {
    if (i === position - 1) {
      prev.next = prev.next.next;
      break;
    }
    prev = prev.next;
    i++;
  }
  return head;
}
