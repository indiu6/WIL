const moveZeroesAlt = (nums: number[]) => {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i]
            index++
        }
    }

    for (let i = index; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
}

// 2. 0을 뒤로 밀기
// 배열의 모든 요소를 한 번 순회하며 0이 아닌 값을 앞에 넣고, 마지막에 남은 부분을 0으로 채움.
// 시간 복잡도: O(n)
// 공간 복잡도: O(1)


// 문제: Move Zeroes (제로 이동)
// 설명: 주어진 배열에서 0을 배열의 끝으로 이동시키는 함수를 작성하시오.

// 0이 아닌 숫자들의 상대적 순서는 유지해야 합니다.
// 추가 배열을 사용하지 않고 제자리에서 해결해야 합니다.
// 예시
// 입력:
let nums1 = [0, 1, 0, 3, 12];
// 출력:
// [1, 3, 12, 0, 0]
console.log(moveZeroesAlt(nums1));

// 입력:
// nums = [0, 0, 1]
// 출력:
// [1, 0, 0]


// 1. 투 포인터 (Two Pointers)
// left 포인터: 0이 아닌 값을 저장할 위치를 가리킴.
// right 포인터: 배열을 순회하며 요소를 탐색.
// 시간 복잡도: O(n)
// 공간 복잡도: O(1)

function moveZeroes(nums: number[]): void {
    let left = 0; // 0이 아닌 값을 넣을 위치

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            // 0이 아닌 값을 `left` 위치로 이동
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
    }
}

// 테스트
moveZeroes(nums1);
console.log(nums1); // [1, 3, 12, 0, 0]

const nums2 = [0, 0, 1];
moveZeroes(nums2);
console.log(nums2); // [1, 0, 0]

