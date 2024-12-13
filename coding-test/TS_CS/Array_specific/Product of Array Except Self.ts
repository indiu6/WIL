const productExceptSelf = (nums: number[]): number[] => {
    let result = new Array(nums.length).fill(1)

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix; // 현재까지의 왼쪽 곱 저장
        // [1, 1, 2, 6]

        prefix *= nums[i];  // prefix 업데이트
        // 1 > 1 > 2 > 6 > 24
    }

    // 오른쪽 곱셈 결과 곱하기
    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= postfix;
        // [ , , 8, 6]

        postfix *= nums[i];
        //  <  <  <  < 4
    }

    return result
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]