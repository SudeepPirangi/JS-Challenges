function mergeLists(head1, head2) {
  if (!head1 || !head2) return null;
  let newList = new SinglyLinkedListNode(0);
  const head = newList;
  while (head1 || head2) {
    if (!head1) {
      newList.next = head2;
      return head.next;
    }
    if (!head2) {
      newList.next = head1;
      return head.next;
    }
    if (head1.data < head2.data) {
      newList.next = head1;
      head1 = head1.next;
    } else {
      newList.next = head2;
      head2 = head2.next;
    }
    newList = newList.next;
  }
  return head.next;
}
