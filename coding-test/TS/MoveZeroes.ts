const moveZeroes = (nums: number[]) => {
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

// 문제: Move Zeroes (제로 이동)
// 설명: 주어진 배열에서 0을 배열의 끝으로 이동시키는 함수를 작성하시오.

// 0이 아닌 숫자들의 상대적 순서는 유지해야 합니다.
// 추가 배열을 사용하지 않고 제자리에서 해결해야 합니다.
// 예시
// 입력:
let nums1 = [0, 1, 0, 3, 12];
// 출력:
// [1, 3, 12, 0, 0]
console.log(moveZeroes(nums1));

// 입력:
// nums = [0, 0, 1]
// 출력:
// [1, 0, 0]