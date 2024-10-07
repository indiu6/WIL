from typing import Counter


# Time: O(N)
# Space: O(1)
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        dic = {}  # hashmap

        for char in s:
            if char not in dic:
                dic[char] = 1
            else:
                dic[char] += 1

        for char in t:
            if char not in dic or dic[char] == 0:
                return False
            else:
                dic[char] -= 1

        return True

    def isAnagram2(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)

    # but this is not more efficient than above 2
    def isAnagram3(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)


# Sort ? T is N^2 or N log N or N or 1
