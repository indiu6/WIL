const containsDuplicateMy = (nums: number[]) => {
    let numsSet = new Set(nums)

    return numsSet.size !== nums.length
}

function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();

    for (const num of nums) {
        if (seen.has(num)) {
            return true; // 중복 발견
        }
        seen.add(num);
    }

    return false; // 중복 없음
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

// 집합(Set):

// 간단하고 직관적.
// 시간 복잡도 O(n).

// 해시맵:

// 유연한 확장 가능.
// 시간 복잡도 O(n).

// 정렬:

// 추가 메모리가 필요 없지만, 정렬 때문에 느릴 수 있음.
// 시간 복잡도 O(n log n).

function containsDuplicateWithMap(nums: number[]): boolean {
    const map: { [key: number]: boolean } = {};

    for (const num of nums) {
        if (map[num]) {
            return true; // 중복 발견
        }
        map[num] = true;
    }

    return false; // 중복 없음
}

// 테스트
console.log(containsDuplicateWithMap([1, 2, 3, 1])); // true
console.log(containsDuplicateWithMap([1, 2, 3, 4])); // false
console.log(containsDuplicateWithMap([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true


function containsDuplicateSorted(nums: number[]): boolean {
    nums.sort((a, b) => a - b); // 배열 정렬

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true; // 중복 발견
        }
    }

    return false; // 중복 없음
}

// 테스트
console.log(containsDuplicateSorted([1, 2, 3, 1])); // true
console.log(containsDuplicateSorted([1, 2, 3, 4])); // false
console.log(containsDuplicateSorted([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
