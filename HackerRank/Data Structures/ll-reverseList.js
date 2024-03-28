function reverse(llist) {
  // Write your code here
  if (!llist) return llist;
  let curr = llist;
  const arr = [];
  while (curr) {
    arr.push(curr.data);
    curr = curr.next;
  }
  const node = new SinglyLinkedListNode(arr[arr.length - 1]);
  const head = node;
  let rev = node;
  for (let i = arr.length - 2; i >= 0; i--) {
    const newNode = new SinglyLinkedListNode(arr[i]);
    console.log(newNode);
    rev.next = newNode;
    rev = rev.next;
  }
  return head;
}
