const maxProfit = (prices: number[]): number => {
    if (prices.length <= 1) return 0; // 조기 반환 조건

    let maxProfit = 0
    // let minPrice = Infinity
    let minPrice = Number.POSITIVE_INFINITY

    // if (prices.length < 2) return 0

    for (const num of prices) {
        if (num < minPrice) {
            minPrice = num
        } else {
            maxProfit = Math.max(maxProfit, num - minPrice)
        }
    }

    return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1]));   // 0
console.log(maxProfit([2, 4, 1]));         // 2
// 효율성:

// 배열을 한 번만 순회하며, O(n) 시간 복잡도로 해결.
// 단순성:

// 추가 메모리 없이 O(1) 공간 복잡도로 동작.