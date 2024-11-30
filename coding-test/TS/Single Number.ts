const singleNumber = (nums: number[]) => {
    let res = 0

    for (const num of nums) {
        res ^= num
    }

    return res
}

function singleNumber2(nums: number[]): number {
    return nums.reduce((acc, num) => acc ^ num, 0);
}

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1

function singleNumberWithMap(nums: number[]): number {
    // let countMap: { [key: number]: number } = {}
    let countMap: Record<number, number> = {}

    for (const num of nums) {
        countMap[num] = (countMap[num] || 0) + 1
    }

    // 빈도가 1인 숫자 찾기
    // for (const [key, value] of Object.entries(countMap)) {
    //     if (value === 1) {
    //         return parseInt(key); // 문자열 키를 숫자로 변환
    //     }
    // }

    for (const key in countMap) {
        if (countMap[key] === 1) {
            return +key // 문자열 키를 숫자로 변환
        }
    }

    return -1
}

console.log(singleNumberWithMap([2, 2, 1])); // 1
console.log(singleNumberWithMap([4, 1, 2, 1, 2])); // 4
console.log(singleNumberWithMap([1])); // 1