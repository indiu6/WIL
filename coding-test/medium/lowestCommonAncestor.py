# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


# Time complexity: O(log n)
# Space complexity: O(1)
class SolutionNC:
    def lowestCommonAncestor(
        self, root: "TreeNode", p: "TreeNode", q: "TreeNode"
    ) -> "TreeNode":
        cur = root  # current

        while cur:
            if p.val > cur.val and q.val > cur.val:
                cur = cur.right
            elif p.val < cur.val and q.val < cur.val:
                cur = cur.left
            else:
                return cur

        # work as same but

        # while root:
        #     if p.val > root.val and q.val > root.val:
        #         root = root.right
        #     elif p.val < root.val and q.val < root.val:
        #         root = root.left
        #     else:
        #         return root


# Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
# Output: 6
# Explanation: The LCA of nodes 2 and 8 is 6.


# Time complexity: O(n)
# Space complexity: O(n)
class Solution:
    def lowestCommonAncestor(
        self, root: "TreeNode", p: "TreeNode", q: "TreeNode"
    ) -> "TreeNode":
        if not root:
            return None

        if root.val == p.val:
            return p
        elif root.val == q.val:
            return q
        # condition when the root is the shared parent of node p and q
        elif root.val < max(p.val, q.val) and root.val > min(p.val, q.val):
            return root

        return self.lowestCommonAncestor(root.left, p, q) or self.lowestCommonAncestor(
            root.right, p, q
        )
