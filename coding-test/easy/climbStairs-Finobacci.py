# Finobacci

# Time complexity: O(N) / looping N times
# Space complexity: O(N) / creating an arr of size N
class Solution:
    def climbStairs(self, n: int) -> int:
        if n < 3:
            return n

        steps = [0, 1, 2, 3]

        for i in range(4, n + 1):  # Time
            steps.append(steps[i - 1] + steps[i - 2])  # Space

        return steps.pop()


# Time complexity: O(N)
# Space complexity: O(1)
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return n

        step1 = 1
        step2 = 2

        for i in range(3, n + 1):
            currentStep = step1 + step2
            step1 = step2
            step2 = currentStep

        return step2
