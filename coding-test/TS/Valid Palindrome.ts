const isPalindromeTwoPointers = (s: string) => {
    // 2 pointer
    let l = 0, r = s.length - 1

    while (l < r) {
        while (l < r && !isAlphaNumeric(s[l])) l++
        while (l < r && !isAlphaNumeric(s[r])) r--

        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false

        l++, r--
    }

    return true
}

const isAlphaNumeric = (char: string): boolean => {
    return /[a-zA-Z0-9]/.test(char)
}

console.log(isPalindromeTwoPointers("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeTwoPointers("race a car")); // false
console.log(isPalindromeTwoPointers(" ")); // true


function isPalindrome(s: string): boolean {
    // 알파벳과 숫자만 남기고 소문자로 변환
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // 정제된 문자열이 뒤집었을 때 동일한지 확인
    return cleaned === cleaned.split("").reverse().join("");
}

// 테스트
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true

// 문자열 정제 후 비교:

// 간단하고 직관적.
// 문자열 길이가 길면 추가 메모리 사용(O(n)).

// 투 포인터:

// O(1) 공간 복잡도.
// 대규모 문자열 처리에 적합.
