# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# Depth-First Search (DFS)
# is a fundamental algorithm used to traverse or search through tree or graph data structures. Starting from a designated root node, DFS explores as far down a branch as possible before backtracking, ensuring that all nodes and edges are visited systematically.
class Solution2:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        max_diameter = [0]  # use it as a global var

        def height(root):
            if root is None:
                return 0

            left_height = height(root.left)
            right_height = height(root.right)
            diameter = left_height + right_height

            max_diameter[0] = max(max_diameter, diameter)

            return 1 + max(left_height, right_height)

        height(root)
        return max_diameter[0]

    # time O(n), space O(h) h is a number of nodes in the tree


class Solution:
    def __init__(self):
        self.diameter = 0  # stores the maximum diameter calculated

    def depth(self, node: Optional[TreeNode]) -> int:
        """
        This function needs to do the following:
            1. Calculate the maximum depth of the left and right sides of the given node
            2. Determine the diameter at the given node and check if its the maximum
        """
        # Calculate maximum depth
        left = self.depth(node.left) if node.left else 0
        right = self.depth(node.right) if node.right else 0
        # Calculate diameter
        if left + right > self.diameter:
            self.diameter = left + right
        # Make sure the parent node(s) get the correct depth from this node
        return 1 + (left if left > right else right)

    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # if not root:
        #     return 0
        self.depth(root)  # root is guaranteed to be a TreeNode object
        return self.diameter
