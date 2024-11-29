const findMax = (params: number[]) => {
    let max = params[0]

    for (let i = 1; i < params.length; i++) {
        if (params[i] > max) {
            max = params[i]
        }
    }

    return max
}

console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([-3, -1, -7, -4])); // -1