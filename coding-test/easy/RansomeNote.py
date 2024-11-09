from collections import Counter


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        # without Counter import
        # Time: O(m + n), Space: O(1)
        counter = {}
        for c in magazine:
            if c in counter:
                counter[c] += 1
            else:
                counter[c] = 1

        for c in ransomNote:
            if c not in counter:
                return False
            elif counter[c] == 1:
                del counter[c]
            else:
                counter[c] -= 1

        return True

        # Using Counter

        # d1 = Counter(ransomNote)
        # d2 = Counter(magazine)

        # for key, val in d1.items():
        #     if key not in d2:
        #         return False
        #     else:
        #         if d2[key] < val:
        #             return False

        # return True


# see TS ver.
