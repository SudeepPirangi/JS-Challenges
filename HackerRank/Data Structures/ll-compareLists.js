function CompareLists(llist1, llist2) {
  if (llist1 === null && llist2 === null) return 1;
  if (llist1 === null || llist2 === null) return 0;
  let a = llist1;
  let b = llist2;
  while (a && b) {
    if (a.data !== b.data) return 0;
    a = a.next;
    b = b.next;
    if ((a && !b) || (!a && b)) return 0;
  }
  return 1;
}
