# Time: O(n)
# Space: O(1)
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        maxProfit = 0
        cheapestPrice = prices[0]

        for i in range(1, len(prices)):
            if prices[i] < cheapestPrice:
                cheapestPrice = prices[i]

            currentPrice = prices[i] - cheapestPrice
            maxProfit = max(maxProfit, currentPrice)

        return maxProfit


# Input: prices = [7,1,5,3,6,4]
# Output: 5
