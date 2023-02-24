# Approach
# We use a recursive approach to traverse through the image, starting from the given pixel.
# We set the start color of the given pixel as the initial color to be replaced.
# Then we check whether the current pixel has the same color as the start color and also whether it has not already been replaced with the new color.
# If both the conditions are true, we change the color of the current pixel to the new color and recursively call the function to its 4-directional neighbors(up,left,down,right).
# We repeat this process until we have traversed all the pixels with the start color.

# Time complexity:
# The function visits every pixel in the image exactly once, hence the time complexity of the function is O(m∗n), where m is the number of rows and n is the number of columns in the image.

# Space complexity:
# The space complexity of the function is O(m∗n) due to the recursive calls on the function stack.


class Solution:
    def floodFill(
        self, image: list[list[int]], sr: int, sc: int, color: int
    ) -> list[list[int]]:
        # Set the initial color to be replaced
        start_color = image[sr][sc]

        # Get the number of rows and columns in the image
        rows, cols = len(image), len(image[0])

        # Recursive function to perform flood fill
        def backtrack(i: int, j: int, grid: list[list[int]]):
            # Base case: return if the index is out of bounds
            if i < 0 or i >= rows or j < 0 or j >= cols:
                return
            # Base case: return if the current pixel is not the start color or already changed to the new color
            if start_color != grid[i][j] or grid[i][j] == color:
                return
            # Set the color of the current pixel to the new color
            grid[i][j] = color
            # Recursively perform flood fill on the 4-directional neighbors of the current pixel
            backtrack(i - 1, j, grid)  # up
            backtrack(i, j - 1, grid)  # left
            backtrack(i + 1, j, grid)  # down
            backtrack(i, j + 1, grid)  # right

        # Call the backtrack function with the starting pixel and return the modified image
        backtrack(sr, sc, image)
        return image


# Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
# Output: [[2,2,2],[2,2,0],[2,0,1]]
