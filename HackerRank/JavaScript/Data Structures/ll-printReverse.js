function reversePrint(llist) {
  // Write your code here
  if (!llist) return null;
  let curr = llist;
  let dataString = [llist.data];
  while (curr.next) {
    curr = curr.next;
    dataString.push(curr.data);
  }
  for (let i = dataString.length - 1; i >= 0; i--) {
    console.log(dataString[i]);
  }
}
