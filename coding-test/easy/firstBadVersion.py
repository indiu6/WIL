# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:


# use Binary Search
# Time complexity: O(log N), O(log2 N) == binary search
# Space complexity: O(1)
class Solution:
    # The isBadVersion API is already defined for you.
    def isBadVersion(self, version: int) -> bool:
        return version >= self.target

    def firstBadVersion(self, n: int) -> int:
        self.target = n

        start = 1
        end = n

        while start < end:
            mid = (start + end) // 2
            if self.isBadVersion(mid):
                end = mid
            else:
                start = mid + 1

        return start
