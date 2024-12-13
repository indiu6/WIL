const missingNumber = (nums: number[]) => {
    let n = nums.length
    let expectedSum = (n * (n + 1)) / 2
    let actualSum = nums.reduce((sum, num) => sum + num, 0)

    return expectedSum - actualSum
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

// 1. 수학적 접근 (합 공식 사용)
// 0부터 n까지의 합은 n * (n + 1) / 2로 계산 가능.
// 배열의 실제 합을 계산하고, 이를 공식 값에서 빼면 누락된 숫자를 얻을 수 있음.
// 시간 복잡도: O(n)
// 공간 복잡도: O(1)

// 2. XOR 연산 사용
// XOR의 성질을 활용해 모든 숫자를 XOR 연산으로 처리하면 누락된 숫자를 찾을 수 있음.
// 시간 복잡도: O(n)
// 공간 복잡도: O(1)

function missingNumberXOR(nums: number[]): number {
    let n = nums.length
    let xor = 0

    for (let i = 0; i <= n; i++) {
        xor ^= i
    }

    for (const num of nums) {
        xor ^= num
    }

    return xor
}

console.log(missingNumberXOR([3, 0, 1])); // 2
console.log(missingNumberXOR([0, 1])); // 2
console.log(missingNumberXOR([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8