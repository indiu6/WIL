"""
Approach
To solve the problem in linear time and O(1) space, we can use Boyer-Moore Voting Algorithm. 
The algorithm works by maintaining a count variable and a candidate variable. 
We iterate through the array, for each element, we check if the count is 0, if it is, we update the candidate variable to the current element. 
We then increment the count variable if the current element is equal to the candidate, otherwise we decrement the count variable. 
At the end of the iteration, the candidate variable will hold the majority element.

Complexity
The time complexity of this algorithm is O(n), where n is the length of the array.
The space complexity is O(1), as we only need to maintain two variables.
"""


class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        # initialize the count and candidate variables
        count = 0
        candidate = None

        # iterate through the array
        for num in nums:
            # if count is 0, update the candidate variable
            if count == 0:
                candidate = num
            # increment or decrement count based on whether the current element is the candidate
            count += 1 if num == candidate else -1

        # return the candidate variable
        return candidate


# Follow-up: Could you solve the problem in linear time and in O(1) space?
