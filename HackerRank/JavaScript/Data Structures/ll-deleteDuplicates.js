function removeDuplicates(llist) {
  // Write your code here
  let curr = llist;
  while (curr) {
    if (curr.data == curr.next?.data) {
      curr.next = curr.next?.next;
    } else {
      curr = curr.next;
    }
  }
  return llist;
}
