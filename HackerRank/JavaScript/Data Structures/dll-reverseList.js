function reverse(llist) {
  // Write your code here
  // I used more variables so that it
  // should be readable to others
  if (!llist) return null;
  let prev = llist.prev;
  let curr = llist;
  let next = llist.next;
  while (curr) {
    let temp_prev = prev;
    let temp_next = next;
    curr.prev = temp_next;
    curr.next = temp_prev;
    prev = curr;
    curr = curr.prev;
    next = curr && curr.next;
  }
  return prev;
}
