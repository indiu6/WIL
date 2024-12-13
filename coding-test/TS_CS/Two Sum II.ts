const twoSum = (nums: number[], target: number) => {
    let left = 0, right = nums.length - 1

    while (left < right) {
        const sum = nums[left] + nums[right]

        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }

    return []
}

console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6));      // [1, 3]
console.log(twoSum([-1, 0], -1));       // [1, 2]

// 투 포인터(Two Pointers)
// 배열이 정렬되어 있으므로, 양쪽에서 시작하는 두 포인터를 사용.
// 포인터의 합이 target보다 작으면 왼쪽 포인터를 이동.
// 포인터의 합이 target보다 크면 오른쪽 포인터를 이동.
// 시간 복잡도: O(n)
// 공간 복잡도: O(1)