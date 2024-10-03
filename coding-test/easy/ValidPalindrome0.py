import re

# Time: O(N^2)
# Space: O(N)
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = re.sub(r"[\W]", "", s).lower()
        new_str = ""

        for i in reversed(range(len(s))):
            new_str += s[i]

        return new_str == s


# Time: O(N)
# Space: O(N)
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = re.sub(r"[\W]", "", s).lower()
        new_arr = []

        for i in reversed(range(len(s))):
            new_arr.append(s[i])

        return "".join(new_arr) == s


# Time: O(N)
# Space: O(1)
# Using two pointers
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = re.sub(r"[\W]", "", s).lower()

        left = 0
        right = len(s) - 1

        while left < right:
            if s[left] != s[right]:
                return False
            left += 1
            right -= 1

        return True
