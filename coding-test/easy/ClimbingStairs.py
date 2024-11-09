# Finobacci


# Recursive, time O(2^n), space O(n)
class Solution3:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        elif n == 2:
            return 2

        return self.climbStairs(n - 2) + self.climbStairs(n - 1)


# TD DP (memo), time O(n), space O(n)
class Solution4:
    def climbStairs(self, n: int) -> int:
        memo = {1: 1, 2: 2}

        def f(n):
            if n in memo:
                return memo[n]
            else:
                memo[n] = f(n - 2) + f(n - 1)
                return memo[n]

        return f(n)


# BU DP Tabulation, time O(n), space O(n)
class Solution5:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        elif n == 2:
            return 2

        dp = [0] * n
        dp[0] = 1
        dp[1] = 2

        for i in range(2, n):
            dp[i] = dp[i - 2] + dp[i - 1]

        return dp[n - 1]


# BU Constant Space, time O(n), space O(1)
class Solution6:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        elif n == 2:
            return 2

        prev = 1
        cur = 2

        for i in range(2, n):
            # cur = prev + cur
            # prev = cur
            prev, cur = cur, prev + cur

        return cur


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
class Solution2:
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
