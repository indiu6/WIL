const maxSubArray = (nums: number[]): number => {
    // sliding window
    // const len = nums.length
    // if (len === 1) return nums[0]

    // let maxSum = 0
    // let left = 0, right = len - 1

    // while (left <= right) {
    //     let sum = 0
    //     for (let i = left; i < len; i++) {
    //         sum += nums[i]
    //     }
    //     maxSum = Math.max(maxSum, sum)
    //     left++
    //     right--
    // }

    let maxSum = nums[0]
    let currentSum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const element = nums[i];
        currentSum = Math.max(element, element + currentSum)
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23

// 카데인 알고리즘 (Kadane's Algorithm)
// 동적 계획법을 활용하여 연속된 부분 배열의 최대합을 효율적으로 계산.
// 배열을 한 번만 순회하면서 현재 상태를 갱신.
// 시간 복잡도: O(n)
// 공간 복잡도: O(1)
