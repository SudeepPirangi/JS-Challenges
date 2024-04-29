/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  if (!head) return head;

  let values = [];
  let curr = head;

  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }

  let max = -Infinity;
  for (let i = 0; i < values.length / 2; i++) {
    max = Math.max(values[i] + values[values.length - 1 - i], max);
  }

  return max;
};
