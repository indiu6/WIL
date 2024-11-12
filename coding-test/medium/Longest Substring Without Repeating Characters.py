# Sliding Window
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        longest = 0
        sett = set()

        # O(n), time n space
        for r in range(len(s)):
            while s[r] in sett:
                sett.remove(s[left])
                left += 1

            w = (r - left) + 1
            longest = max(longest, w)
            sett.add(s[r])

        return longest
