from collections import Counter


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        d1 = Counter(ransomNote)
        d2 = Counter(magazine)

        for key, val in d1.items():
            if key not in d2:
                return False
            else:
                if d2[key] < val:
                    return False

        return True


# see TS ver.
