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
var reverseList = function (head) {
  if (!head || head.length === 0) return head;
  let prev = null;
  while (head) {
    [head.next, prev, head] = [prev, head, head.next];
  }
  return prev;
};
