const binarySearch = (nums: number[], target: number) => {
    if (nums.length < 2 && nums[0] == target) return 0

    let left = 0, right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (target == nums[mid]) {
            return mid
        } else if (target > nums[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(binarySearch([5], 5));                  // 0