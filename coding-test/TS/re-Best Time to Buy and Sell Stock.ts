const maxProfit = (nums: number[]) => {
    let profit = 0
    let minProfit = Infinity

    if (nums.length < 2) return 0

    for (const num of nums) {
        if (num < minProfit) {
            minProfit = num
        } else {
            profit = Math.max(profit, num - minProfit)
        }
    }

    return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1]));   // 0
console.log(maxProfit([2, 4, 1]));         // 2
// 효율성:

// 배열을 한 번만 순회하며, O(n) 시간 복잡도로 해결.
// 단순성:

// 추가 메모리 없이 O(1) 공간 복잡도로 동작.