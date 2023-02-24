# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# Intuition
# Using DFS(depth-first search) we can solve this.

# Approach
# first check if node is None then return 0, because None node is balanced.
# if not then get count of left or right subtree.
# now if abs(right - left) > 1 then it's not balanced tree, then return -1
# if any of left or right height is -1 then we already found imbance in tree, so return -1.
# now else all of above cases return 1 + max(left, right), because indicating maxdepth till now no matter left or right.
# now if returned answer is > 0 then return true else false.

# Complexity
# Time complexity: O(N)
# Space complexity: O(1)
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        R = root

        def helper(curr=root):
            if curr == None:
                return 0
            else:
                left = helper(curr.left)
                right = helper(curr.right)
                if left == -1 or right == -1:
                    return -1
                elif abs(right - left) > 1:
                    return -1
                return 1 + max(left, right)

        return helper() >= 0


class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        return self.Height(root) >= 0

    def Height(self, root):
        if root is None:
            return 0
        leftheight, rightheight = self.Height(root.left), self.Height(root.right)
        if leftheight < 0 or rightheight < 0 or abs(leftheight - rightheight) > 1:
            return -1
        return max(leftheight, rightheight) + 1


# use Stack
# Time complexity: O(N)
# Space complexity: O(N)

# this is not the Solution, not height-balanced!


class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True

        stack = []
        prevN = float("-inf")

        while stack or root:
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()

            if root.val <= prevN:
                return False
            prevN = root.val
            root = root.right

        return True
