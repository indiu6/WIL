const climbStairsRecursive = (n: number): number => {
    // if (n === 1) return 1
    // if (n === 2) return 2
    if (n <= 2) return n

    return climbStairsRecursive(n - 2) + climbStairsRecursive(n - 1)
}

// 시간 복잡도: O(2^n) (지수형, 매우 비효율적).
// 공간 복잡도: O(n) (재귀 호출 스택).

console.log(climbStairsRecursive(2)); // 2
console.log(climbStairsRecursive(3)); // 3
console.log(climbStairsRecursive(5)); // 8


function climbStairs(n: number): number {
    if (n <= 2) return n;

    const dp: number[] = new Array(n + 1).fill(0);
    dp[1] = 1; // 계단 1개
    dp[2] = 2; // 계단 2개

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// 테스트
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8

// DP 배열:

// 직관적이고 이해하기 쉬움.
// 시간 복잡도: O(n)
// 공간 복잡도: O(n)

// 공간 최적화:

// 두 개의 변수만 사용해 메모리 절약.
// 시간 복잡도: O(n)
// 공간 복잡도: O(1)

function climbStairsOptimized(n: number): number {
    if (n <= 2) return n;

    let prev1 = 1; // dp[i-2]
    let prev2 = 2; // dp[i-1]

    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev1 = prev2; // dp[i-2] 갱신
        prev2 = current; // dp[i-1] 갱신
    }

    return prev2;
}

// 테스트
console.log(climbStairsOptimized(2)); // 2
console.log(climbStairsOptimized(3)); // 3
console.log(climbStairsOptimized(5)); // 8

