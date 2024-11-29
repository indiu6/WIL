const isValid = (params: string) => {
    const stack: string[] = []
    const map: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let char of params) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else {
            if (stack.pop() !== map[char]) {
                return false
            }
        }
    }

    return stack.length === 0

}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true

// 문제: 유효한 괄호 (Valid Parentheses)
// 설명:
// 주어진 문자열이 유효한 괄호 문자열인지 확인하는 함수를 작성하시오.

// 괄호는 (), {}, [] 세 종류가 주어지며, 올바른 괄호 문자열은:
// 괄호가 모두 짝이 맞아야 함.
// 열리는 순서대로 닫혀야 함.
// 예시
// 입력:
// "()"
// 출력:
// true

// 입력:
// "()[]{}"
// 출력:
// true

// 입력:
// "(]"
// 출력:
// false

// 입력:
// "([)]"
// 출력:
// false

// 입력:
// "{[]}"
// 출력:
// true