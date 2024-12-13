const sumRange = (i: number, j: number) => {
    let result = 0

    for (let index = i; index <= j; index++) {
        const element = nums[index];
        result += element
    }

    return result
}

let nums = [-2, 0, 3, -5, 2, -1]
// const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(sumRange(0, 2)); // 1
console.log(sumRange(2, 5)); // -1
console.log(sumRange(0, 5)); // -3