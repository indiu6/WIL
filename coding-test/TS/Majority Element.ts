const majorityElement = (nums: number[]) => {
    let map: { [key: number]: number } = {}
    const majorityCount = Math.floor(nums.length / 2)

    for (const num of nums) {
        // if (map[num]) {
        //     map[num]++
        //     if (map[num] > majorityCount) {
        //         return num
        //     }
        // } else {
        //     map[num] = 1
        // }

        map[num] = (map[num] ?? 0) + 1
        if (map[num] > majorityCount) {
            return num
        }
    }
}
// 시간 복잡도: O(n) 배열을 한 번 순회하며 map을 업데이트.
// 공간 복잡도: O(n) 숫자와 그 빈도를 저장하기 위한 map의 공간.

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

function majorityElementBoyerMoore(nums: number[]): number {
    let candidate = nums[0];
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num; // 새로운 후보 선정
        }
        count += (num === candidate) ? 1 : -1; // 후보와 같으면 증가, 다르면 감소
    }

    return candidate;
}

// 보이어-무어 알고리즘:

// 효율적이고 O(1) 공간 복잡도.
// 대규모 데이터에 적합.