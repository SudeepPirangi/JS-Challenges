def has_cycle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
        if slow == fast:
            return 1
    return 0