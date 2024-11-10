# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# Iterative way
# Time complexity: O(N)
# Space complexity: O(1)
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        current = head

        while current:
            temp = current.next  # t = 2, 3
            current.next = prev  # = N, 1
            prev = current  # p = 1, 2
            current = temp  # c = 2, 3

        return prev
