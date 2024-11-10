from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        h = set()

        for num in nums:
            if num in h:
                return True
            else:
                h.add(num)

        return False

    # time complexity of O(n) and a space complexity of O(n)
