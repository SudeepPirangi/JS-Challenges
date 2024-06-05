function getNode(llist, positionFromTail) {
  // Write your code here
  const arr = [];
  if (!llist) return null;
  while (llist) {
    arr.push(llist.data);
    llist = llist.next;
  }
  let posInArray = arr.length - 1 - positionFromTail;
  return posInArray < 0 ? null : arr[posInArray];
}
