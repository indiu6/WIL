# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


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
