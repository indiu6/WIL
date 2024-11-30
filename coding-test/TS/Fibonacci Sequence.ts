// 주어진 n에 대해, 피보나치 수열의 n번째 값을 반환하는 함수를 작성하세요.

const fibonacciRecursive = (num: number): number => {
    if (num === 0) {
        return 0
    } else if (num === 1) {
        return 1
    }

    return fibonacciRecursive(num - 2) + fibonacciRecursive(num - 1)
}

console.log(fibonacciRecursive(0)); // 0
console.log(fibonacciRecursive(1)); // 1
console.log(fibonacciRecursive(5)); // 5
console.log(fibonacciRecursive(10)); // 55

const fibonacciIterative = (num: number) => {
    if (num === 0) {
        return 0
    } else if (num === 1) {
        return 1
    }
    // 0, 1, 2, 3, 5, 8
    let a = 0, b = 1 // 1, 1  > 
    for (let i = 2; i <= num; i++) {
        let temp = a + b; // 1 > 3
        a = b // 1 > 
        b = temp // 1 > 3
    }
    return b

}

console.log(fibonacciIterative(0)); // 0
console.log(fibonacciIterative(1)); // 1
console.log(fibonacciIterative(5)); // 5
console.log(fibonacciIterative(10)); // 55