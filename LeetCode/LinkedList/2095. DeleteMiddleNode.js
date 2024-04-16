/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  let curr = head;
  let nodes = [];
  if (!head) return null;
  while (curr) {
    nodes.push(curr.val);
    curr = curr.next;
  }
  const mid = Math.floor(nodes.length / 2);
  let i = 0;
  curr = head;
  if (i === mid) return null;
  while (curr) {
    // console.log(i, mid, curr.val, curr.next);
    if (i === mid - 1) {
      curr.next = curr?.next?.next || null;
      break;
    }
    i++;
    curr = curr.next;
  }
  return head;
};

// Optimal code
var deleteMiddle = function (head) {
  if (!head || !head.next) return null;

  let fast = head;
  fast = fast.next.next;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};
