"""
Approach for this Problem:

Initialize two variables, oddCount to store the number of characters with an odd count of occurrences and an unordered map to store the count of each character in the string.

Iterate through the string and for each character ch, increment the count of that character in the unordered map.

If the count of the current character ch is odd, increment oddCount. If the count is even, decrement oddCount.

If oddCount is greater than 1, return s.length() - oddCount + 1, which is the maximum length of a palindrome that can be formed by using all but one character with an odd count of occurrences.

If oddCount is not greater than 1, return s.length(), which is the length of the original string, as all characters can be used to form a palindrome.
"""

# Time complexity: O(n), where n is the length of the string s. This is because we are iterating through the string only once.
# Space complexity: O(m), where m is the number of unique characters in the string. This is because we are using an unordered map to store the count of each character.
class Solution:
    def longestPalindrome(self, s: str) -> int:
        odd_count = 0
        d = {}

        for ch in s:
            if ch in d:
                d[ch] += 1
            else:
                d[ch] = 1

            if d[ch] % 2 == 1:
                odd_count += 1
            else:
                odd_count -= 1

        if odd_count > 1:
            return len(s) - odd_count + 1

        return len(s)


"""
Approach

Use a set to keep track of unmatched characters. If we encounter a character that is already in our set, we can add this pair to our palindrome (increasing the palindrome's length by +2) and remove the single from our set.

If we have any left over singles at the end, we can use one of them for the center of our palindrome to increase the palindrome length by 1.


Complexity

Time complexity: O(N), since we iterate over each character in the string
Space complexity: O(1), since the only extra storage we use is the counter for palindrome length and a set that is at most the size of our character set (ASCII, for example).
"""


class Solution:
    def longestPalindrome(self, s: str) -> int:
        singles = set()
        length = 0

        for char in s:
            if char in singles:
                singles.remove(char)
                length += 2
            else:
                singles.add(char)

        if len(singles) > 0:
            length += 1

        return length
